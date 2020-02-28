import $ from "jquery"

import arrow from "../../assets/img/arrow.png"
import text from "../../assets/img/text.png"
import square from "../../assets/img/square.png"
import circle from "../../assets/img/circle.png"
import brush from "../../assets/img/brush.png"
import undo from "../../assets/img/undo.png"
import redo from "../../assets/img/redo.png"
import pan from "../../assets/img/pan.png"

/**
 * Function to annotate the image
 * @param {[type]} el      [description]
 * @param {Object} options [description]
 */
export default function Annotate(el, options) {
  this.options = options;
  this.$el = $(el);
  this.clicked = false;
  this.fromx = null;
  this.fromy = null;
  this.fromxText = null;
  this.fromyText = null;
  this.tox = null;
  this.toy = null;
  this.points = [];
  this.storedUndo = [];
  this.storedElement = [];
  this.images = [];
  this.img = null;
  this.selectedImage = null;
  this.currentWidth = null;
  this.currentHeight = null;
  this.selectImageSize = {};
  this.compensationWidthRate = 1;
  this.linewidth = 2;
  this.fontsize = '20px';
  this.init();
}

Annotate.prototype = {
  init: function() {
    var self = this;
    self.linewidth = self.options.linewidth || self.linewidth;
    self.fontsize = self.options.fontsize || self.fontsize;
    self.$el.addClass('annotate-container');
    self.$el.css({
      cursor: 'pointer'
    });
    self.baseLayerId = 'baseLayer_' + self.$el.attr('id');
    self.drawingLayerId = 'drawingLayer_' + self.$el.attr('id');
    self.toolOptionId = 'tool_option_' + self.$el.attr('id');
    self.$el.append($('<canvas id="' + self.baseLayerId + '"></canvas>'));
    self.$el.append($('<canvas id="' + self.drawingLayerId + '"></canvas>'));
    self.baseCanvas = document.getElementById(self.baseLayerId);
    self.drawingCanvas = document.getElementById(self.drawingLayerId);
    self.baseContext = self.baseCanvas.getContext('2d');
    self.drawingContext = self.drawingCanvas.getContext('2d');
    self.baseContext.lineJoin = 'round';
    self.drawingContext.lineJoin = 'round';
    var classPosition1 = 'btn-group';
    var classPosition2 = '';

    self.$tool = '<div id="" class="btn-group btn-group-annotate" role="group" >' +
      '<div class="' + classPosition1 + '" data-toggle="buttons">' +
      '<button id="undoaction" title="Undo the last annotation"' +
      ' class="tool-button ' + classPosition2 +
      ' annotate-undo">' +
      ' <img src="' + undo + '" /></button>';
    if (self.options.unselectTool) {
      self.$tool += '<label class="tool-button active">' +
        '<input type="radio" name="' + self.toolOptionId +
        '" data-tool="null"' +
        ' data-toggle="tooltip" data-placement="top"' +
        ' title="No tool selected">' +
        '<img src="'+ pan +'" />' +
        '</label>';
    }
    self.$tool += '<label class="tool-button">' +
      '<input type="radio" name="' + self.toolOptionId +
      '" data-tool="rectangle"' +
      ' data-toggle="tooltip" data-placement="top"' +
      ' title="Draw an rectangle">' +
      ' <img src="'+ square +'" />' +
      '</label><label class="tool-button">' +
      '<input type="radio" name="' + self.toolOptionId +
      '" data-tool="circle"' +
      ' data-toggle="tooltip"' +
      'data-placement="top" title="Write some text">' +
      ' <img src="'+ circle +'" />' +
      '</label><label class="tool-button">' +
      '<input type="radio" name="' + self.toolOptionId +
      '" data-tool="text"' +
      ' data-toggle="tooltip"' +
      'data-placement="top" title="Write some text">' +
      ' <img src="'+ text +'" /></label>' +
      '<label class="tool-button">' +
      '<input type="radio" name="' + self.toolOptionId +
      '" data-tool="arrow"' +
      ' data-toggle="tooltip" data-placement="top" title="Draw an arrow">' +
      ' <img src="'+ arrow +'" /></label>' +
      '<label class="tool-button">' +
      '<input type="radio" name="' + self.toolOptionId +
      '" data-tool="pen"' +
      ' data-toggle="tooltip" data-placement="top" title="Pen Tool">' +
      ' <img src="' + brush +'" /></label>' +
      '<button type="button" id="redoaction"' +
      ' title="Redo the last undone annotation"' +
      'class="tool-button ' + classPosition2 + ' annotate-redo">' +
      ' <img src="'+ redo +'" /></button>' +
      '</div></div>';
    self.$tool = $(self.$tool);
    $('.annotate-container').append(self.$tool);
    //self.$el.append(self.$tool)
    //.insertBefore($('.annotate-container').parent('div'))
    var canvasPosition = self.$el.offset();
    self.$textbox = $('<textarea id=""' +
      ' style="position:absolute;z-index:100000;display:none;top:0;left:0;' +
      'background:transparent;border:1px dotted; line-height:25px;' +
      ';font-size:' + self.fontsize +
      ';font-family:sans-serif;color:' + self.options.color +
      ';word-wrap: break-word;outline-width: 0;overflow: hidden;' +
      'padding:0px"></textarea>');
    $('body').append(self.$textbox);
    if (self.options.images) {
      self.initBackgroundImages();
    } else {
      if (!self.options.width && !self.options.height) {
        self.options.width = 640;
        self.options.height = 480;
      }
      self.baseCanvas.width = self.drawingCanvas.width = self.options.width;
      self.baseCanvas.height = self.drawingCanvas.height = self.options
        .height;
    }
    self.$tool.on('change', 'input[name^="tool_option"]', function(e) {
      self.$el.css({cursor: 'crosshair'});
      self.$el.find('.tool-button').removeClass('active')
      $(this).parent('label').addClass('active')
      self.selectTool($(this));
    });
    $('[data-tool="' + self.options.type + '"]').trigger('click');
    self.$tool.on('click', '.annotate-redo', function(event) {
      self.redoaction(event);
    });
    self.$tool.on('click', '.annotate-undo', function(event) {
      self.undoaction(event);
    });
    $(document).on(self.options.selectEvent, '.annotate-image-select',
      function(event) {
        event.preventDefault();
        var image = self.selectBackgroundImage($(this).attr(self.options.idAttribute));
        self.setBackgroundImage(image);
      });
    $('#' + self.drawingLayerId).on('mousedown touchstart', function(
      event) {
      self.annotatestart(event);
    });
    $('#' + self.drawingLayerId).on('mouseup touchend', function(event) {
      self.annotatestop(event);
    });
    // https://developer.mozilla.org/en-US/docs/Web/Events/touchleave
    $('#' + self.drawingLayerId).on('mouseleave touchleave', function(
      event) {
      self.annotateleave(event);
    });
    $('#' + self.drawingLayerId).on('mousemove touchmove', function(
      event) {
      self.annotatemove(event);
    });
    $(window).on('resize', function() {
      self.annotateresize();
    });
    self.checkUndoRedo();
  },
  generateId: function(length) {
    var chars =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split(
        '');
    var charsLen = chars.length;
    if (!length) {
      length = Math.floor(Math.random() * charsLen);
    }
    var str = '';
    for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * charsLen)];
    }
    return str;
  },
  addElements: function(newStoredElements, set, callback)
  {
    var self = this;
    this.storedElement = newStoredElements;
    //console.log('DJ: Adding new annotations');
    self.clear();
    self.redraw();

  },
  pushImage: function(newImage, set, callback) {
    var self = this;
    var id = null;
    var path = null;
    if (typeof newImage === 'object') {
      id = newImage.id;
      path = newImage.path;
    } else {
      id = newImage;
      path = newImage;
    }
    if (id === '' || typeof id === 'undefined' || self.selectBackgroundImage(
      id)) {
      id = self.generateId(10);
      while (self.selectBackgroundImage(id)) {
        id = self.generateId(10);
      }
    }
    var image = {
      id: id,
      path: path,
      storedUndo: [],
      storedElement: []
    };
    self.images.push(image);
    if (set) {
      self.setBackgroundImage(image);
    }
    if (callback) {
      callback({
        id: image.id,
        path: image.path
      });
    }
    self.$el.trigger('annotate-image-added', [
      image.id,
      image.path
    ]);
  },
  initBackgroundImages: function() {
    var self = this;
    $.each(self.options.images, function(index, image) {
      var set = false;
      if (index === 0) {
        set = true;
      }
      self.pushImage(image, set);
    });
  },
  selectBackgroundImage: function(id) {
    var self = this;
    var image = $.grep(self.images, function(element) {
      return element.id === id;
    })[0];
    return image;
  },
  setBackgroundImage: function(image) {
    var self = this;
    if (self.$textbox.is(':visible')) {
      self.pushText();
    }
    var currentImage = self.selectBackgroundImage(self.selectedImage);
    if (currentImage) {
      currentImage.storedElement = self.storedElement;
      currentImage.storedUndo = self.storedUndo;
    }
    self.img = new Image();
    self.img.src = image.path;
    self.img.onload = function() {
      if ((self.options.width && self.options.height) !== undefined ||
        (self.options.width && self.options.height) !== 0) {
        self.currentWidth = this.width;
        self.currentHeight = this.height;
        self.selectImageSize.width = this.width;
        self.selectImageSize.height = this.height;
      } else {
        self.currentWidth = self.options.width;
        self.currentHeight = self.options.height;
      }
      self.baseCanvas.width = self.drawingCanvas.width = self.currentWidth;
      self.baseCanvas.height = self.drawingCanvas.height = self.currentHeight;
      self.baseContext.drawImage(self.img, 0, 0, self.currentWidth,
        self.currentHeight);
      self.$el.css({
        height: self.currentHeight,
        width: self.currentWidth
      });
      self.storedElement = image.storedElement;
      self.storedUndo = image.storedUndo;
      self.selectedImage = image.id;
      self.checkUndoRedo();
      self.clear();
      self.redraw();
      self.annotateresize();
    };
  },
  checkUndoRedo: function() {
    var self = this;
    self.$tool.children('.annotate-redo').attr('disabled', self.storedUndo.length === 0);
    self.$tool.children('.annotate-undo').attr('disabled', self.storedElement.length === 0);
  },
  undoaction: function(event) {
    event.preventDefault();
    var self = this;
    self.storedUndo.push(self.storedElement[self.storedElement.length - 1]);
    self.storedElement.pop();
    self.checkUndoRedo();
    self.clear();
    self.redraw();
  },
  redoaction: function(event) {
    event.preventDefault();
    var self = this;
    self.storedElement.push(self.storedUndo[self.storedUndo.length - 1]);
    self.storedUndo.pop();
    self.checkUndoRedo();
    self.clear();
    self.redraw();
  },
  redraw: function() {
    var self = this;
    self.baseCanvas.width = self.baseCanvas.width;
    if (self.options.images) {
      self.baseContext.drawImage(self.img, 0, 0, self.currentWidth,
        self.currentHeight);
    }
    if (self.storedElement.length === 0) {
      return;
    }
    // clear each stored line
    for (var i = 0; i < self.storedElement.length; i++) {
      var element = self.storedElement[i];
      if (!element){
        return;
      }
      switch (element.type) {
        case 'rectangle':
          self.drawRectangle(self.baseContext, element.fromx, element.fromy,
            element.tox, element.toy);
          break;
        case 'arrow':
          self.drawArrow(self.baseContext, element.fromx, element.fromy,
            element.tox, element.toy);
          break;
        case 'pen':
          for (var b = 0; b < element.points.length - 1; b++) {
            var fromx = element.points[b][0];
            var fromy = element.points[b][1];
            var tox = element.points[b + 1][0];
            var toy = element.points[b + 1][1];
            self.drawPen(self.baseContext, fromx, fromy, tox, toy);
          }
          break;
        case 'text':
          self.drawText(self.baseContext, element.text, element.fromx,
            element.fromy, element.maxwidth);
          break;
        case 'circle':
          self.drawCircle(self.baseContext, element.fromx, element.fromy,
            element.tox, element.toy);
          break;
        default:
      }
    }
  },
  clear: function() {
    var self = this;
    // Clear Canvas
    self.drawingCanvas.width = self.drawingCanvas.width;
  },
  drawRectangle: function(context, x, y, w, h) {
    var self = this;
    context.beginPath();
    context.rect(x, y, w, h);
    context.fillStyle = 'transparent';
    context.fill();
    context.lineWidth = self.linewidth;
    context.strokeStyle = self.options.color;
    context.stroke();
  },
  drawCircle: function(context, x1, y1, x2, y2) {
    var radiusX = (x2 - x1) * 0.5;
    var radiusY = (y2 - y1) * 0.5;
    var centerX = x1 + radiusX;
    var centerY = y1 + radiusY;
    var step = 0.05;
    var a = step;
    var pi2 = Math.PI * 2 - step;
    var self = this;
    context.beginPath();
    context.moveTo(centerX + radiusX * Math.cos(0), centerY + radiusY *
      Math.sin(0));
    for (; a < pi2; a += step) {
      context.lineTo(centerX + radiusX * Math.cos(a), centerY + radiusY *
        Math.sin(a));
    }
    context.lineWidth = self.linewidth;
    context.strokeStyle = self.options.color;
    context.closePath();
    context.stroke();
  },
  drawArrow: function(context, x, y, w, h) {
    var self = this;
    var angle = Math.atan2(h - y, w - x);
    context.beginPath();
    context.lineWidth = self.linewidth;
    context.moveTo(x, y);
    context.lineTo(w, h);
    context.moveTo(w - self.linewidth * 5 * Math.cos(angle + Math.PI / 6), h - self.linewidth * 5 * Math.sin(angle + Math.PI / 6));
    context.lineTo(w, h);
    context.lineTo(w - self.linewidth * 5 * Math.cos(angle - Math.PI / 6), h - self.linewidth * 5 * Math.sin(angle - Math.PI / 6));
    context.strokeStyle = self.options.color;
    context.stroke();
  },
  drawPen: function(context, fromx, fromy, tox, toy) {
    var self = this;
    context.lineWidth = self.linewidth;
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.strokeStyle = self.options.color;
    context.stroke();
  },
  wrapText: function(drawingContext, text, x, y, maxWidth, lineHeight) {
    var lines = text.split('\n');
    for (var i = 0; i < lines.length; i++) {
      var words = lines[i].split(' ');
      var line = '';
      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = drawingContext.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          drawingContext.fillText(line, x, y);
          line = words[n] + ' ';
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      drawingContext.fillText(line, x, y + i * lineHeight);
    }
  },
  drawText: function(context, text, x, y, maxWidth) {
    var self = this;
    context.font = self.fontsize + ' sans-serif';
    context.textBaseline = 'top';
    context.fillStyle = self.options.color;
    self.wrapText(context, text, x + 3, y + 4, maxWidth, 25);
  },
  pushText: function() {
    var self = this;
    var text = self.$textbox.val();
    self.$textbox.val('').hide();
    if (text) {
      self.storedElement.push({
        type: 'text',
        text: text,
        fromx: self.fromx,
        fromy: self.fromy,
        maxwidth: self.tox
      });
      if (self.storedUndo.length > 0) {
        self.storedUndo = [];
      }
    }
    self.checkUndoRedo();
    self.redraw();
  },
  // Events
  selectTool: function(element) {
    var self = this;
    self.options.type = element.data('tool');
    if (self.$textbox.is(':visible')) {
      self.pushText();
    }
  },
  annotatestart: function(event) {
    var self = this;
    self.clicked = true;
    var offset = self.$el.offset();
    if (self.$textbox.is(':visible')) {
      var text = self.$textbox.val();
      self.$textbox.val('').hide();
      if (text !== '') {
        if (!self.tox) {
          self.tox = 100;
        }
        self.storedElement.push({
          type: 'text',
          text: text,
          fromx: (self.fromxText - offset.left) * self.compensationWidthRate,
          fromy: (self.fromyText - offset.top) * self.compensationWidthRate,
          maxwidth: self.tox
        });
        if (self.storedUndo.length > 0) {
          self.storedUndo = [];
        }
      }
      self.checkUndoRedo();
      self.redraw();
      self.clear();
    }
    self.tox = null;
    self.toy = null;
    self.points = [];
    var pageX = event.pageX || event.originalEvent.touches[0].pageX;
    var pageY = event.pageY || event.originalEvent.touches[0].pageY;
    self.fromx = (pageX - offset.left) * self.compensationWidthRate;
    self.fromy = (pageY - offset.top) * self.compensationWidthRate;
    self.fromxText = pageX;
    self.fromyText = pageY;
    if (self.options.type === 'text') {
      self.$textbox.css({
        left: self.fromxText + 2,
        top: self.fromyText,
        width: 0,
        height: 0
      }).show();
    }
    if (self.options.type === 'pen') {
      self.points.push([
        self.fromx,
        self.fromy
      ]);
    }
  },
  annotatestop: function() {
    var self = this;
    self.clicked = false;
    if (self.toy !== null && self.tox !== null) {
      switch (self.options.type) {
        case 'rectangle':
          self.storedElement.push({
            type: 'rectangle',
            fromx: self.fromx,
            fromy: self.fromy,
            tox: self.tox,
            toy: self.toy
          });
          break;
        case 'circle':
          self.storedElement.push({
            type: 'circle',
            fromx: self.fromx,
            fromy: self.fromy,
            tox: self.tox,
            toy: self.toy
          });
          break;
        case 'arrow':
          self.storedElement.push({
            type: 'arrow',
            fromx: self.fromx,
            fromy: self.fromy,
            tox: self.tox,
            toy: self.toy
          });
          break;
        case 'text':
          self.$textbox.css({
            left: self.fromxText + 2,
            top: self.fromyText,
            width: self.tox - 12,
            height: self.toy
          });
          break;
        case 'pen':
          self.storedElement.push({
            type: 'pen',
            points: self.points
          });
          for (var i = 0; i < self.points.length - 1; i++) {
            self.fromx = self.points[i][0];
            self.fromy = self.points[i][1];
            self.tox = self.points[i + 1][0];
            self.toy = self.points[i + 1][1];
            self.drawPen(self.baseContext, self.fromx, self.fromy, self
              .tox,
              self.toy);
          }
          self.points = [];
          break;
        default:
      }
      if (self.storedUndo.length > 0) {
        self.storedUndo = [];
      }
      self.checkUndoRedo();
      self.redraw();
    } else if (self.options.type === 'text') {
      self.$textbox.css({
        left: self.fromxText + 2,
        top: self.fromyText,
        width: 100,
        height: 50
      });
    }
  },
  annotateleave: function(event) {
    var self = this;
    if (self.clicked) {
      self.annotatestop(event);
    }
  },
  annotatemove: function(event) {
    var self = this;
    if (self.options.type) {
      event.preventDefault();
    }
    if (!self.clicked) {
      return;
    }
    var offset = self.$el.offset();
    var pageX = event.pageX || event.originalEvent.touches[0].pageX;
    var pageY = event.pageY || event.originalEvent.touches[0].pageY;
    switch (self.options.type) {
      case 'rectangle':
        self.clear();
        self.tox = (pageX - offset.left) * self.compensationWidthRate -
          self.fromx;
        self.toy = (pageY - offset.top) * self.compensationWidthRate -
          self.fromy;
        self.drawRectangle(self.drawingContext, self.fromx, self.fromy,
          self.tox, self.toy);
        break;
      case 'arrow':
        self.clear();
        self.tox = (pageX - offset.left) * self.compensationWidthRate;
        self.toy = (pageY - offset.top) * self.compensationWidthRate;
        self.drawArrow(self.drawingContext, self.fromx, self.fromy,
          self.tox,
          self.toy);
        break;
      case 'pen':
        self.tox = (pageX - offset.left) * self.compensationWidthRate;
        self.toy = (pageY - offset.top) * self.compensationWidthRate;
        self.fromx = self.points[self.points.length - 1][0];
        self.fromy = self.points[self.points.length - 1][1];
        self.points.push([
          self.tox,
          self.toy
        ]);
        self.drawPen(self.drawingContext, self.fromx, self.fromy, self.tox,
          self.toy);
        break;
      case 'text':
        self.clear();
        self.tox = (pageX - self.fromxText) * self.compensationWidthRate;
        self.toy = (pageY - self.fromyText) * self.compensationWidthRate;
        self.$textbox.css({
          left: self.fromxText + 2,
          top: self.fromyText,
          width: self.tox - 12,
          height: self.toy
        });
        break;
      case 'circle':
        self.clear();
        self.tox = (pageX - offset.left) * self.compensationWidthRate;
        self.toy = (pageY - offset.top) * self.compensationWidthRate;
        self.drawCircle(self.drawingContext, self.fromx, self.fromy,
          self
          .tox, self.toy);
        break;
      default:
    }
  },
  annotateresize: function() {
    var self = this;
    var currentWidth = self.$el.width();
    var currentcompensationWidthRate = self.compensationWidthRate;
    self.compensationWidthRate = self.selectImageSize.width / currentWidth;
    if (self.compensationWidthRate < 1) {
      self.compensationWidthRate = 1;
    }
    self.linewidth = self.options.linewidth * self.compensationWidthRate;
    self.fontsize = String(parseInt(self.options.fontsize.split('px')[0], 10) * self.compensationWidthRate) + 'px';
    if (currentcompensationWidthRate !== self.compensationWidthRate) {
      self.redraw();
      self.clear();
    }
  },
  updateColor: function (color) {
    this.options.color = color
    this.redraw()
    this.clear()
  },
  getColor: function () {
    return JSON.parse(JSON.stringify( this.options.color ))
  },
  destroy: function() {
    var self = this;
    $(document).off(self.options.selectEvent, '.annotate-image-select');
    self.$tool.remove();
    self.$textbox.remove();
    self.$el.children('canvas').remove();
    self.$el.removeData('annotate');
  },
  exportImage: function(options, callback) {
    var self = this;
    if (self.$textbox.is(':visible')) {
      self.pushText();
    }
    var exportDefaults = {
      type: 'image/jpeg',
      quality: 0.75
    };
    options = $.extend({}, exportDefaults, options);
    var image = self.baseCanvas.toDataURL(options.type, options.quality);
    if (callback) {
      callback(image);
    }else {
      self.options.onExport(image);
    }
  }
}

$.fn.annotate = function(options, cmdOption, callback) {
  var $annotate = $(this).data('annotate');
  if (options === 'destroy') {
    if ($annotate) {
      $annotate.destroy();
    } else {
      throw new Error('No annotate initialized for: #' + $(this).attr(
        'id'));
    }
  } else if (options === 'push') {
    if ($annotate) {
      $annotate.pushImage(cmdOption, true, callback);
    } else {
      throw new Error('No annotate initialized for: #' + $(this).attr(
        'id'));
    }

  }else if (options === 'fill') {
    if ($annotate) {
      $annotate.addElements(cmdOption, true, callback);
    } else {
      throw new Error('No annotate initialized for: #' + $(this).attr(
        'id'));
    }

  } else if (options === 'export') {
    if ($annotate) {
      $annotate.exportImage(cmdOption, callback);
    } else {
      throw new Error('No annotate initialized for: #' + $(this).attr(
        'id'));
    }
  } else {
    var opts = $.extend({}, $.fn.annotate.defaults, options);
    var annotate = new Annotate($(this), opts);
    $(this).data('annotate', annotate);
  }
};

$.fn.annotate.defaults = {
  width: null,
  height: null,
  images: [],
  color: 'red',
  type: 'unselect',
  linewidth: 2,
  fontsize: '20px',
  bootstrap: true,
  position: 'top',
  idAttribute: 'id',
  selectEvent: 'change',
  unselectTool: false,
  onExport: function(image) {
    console.log(image);
  }
};
