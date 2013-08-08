/**
@type Number
@const
*/
Blob.prototype.size = 0;
/**
@type String
@const
*/
Blob.prototype.type = 0;
/**
@param {Number} start
@param {Number} end
@param {String} contentType
@return Blob
*/
Blob.prototype.slice = function(start,end,contentType) {};
Blob = {};

/**
@type Number
@const
*/
FileList.prototype.length = 0;
FileList = {};

/**
@type FileList
@const
*/
HTMLInputElement.prototype.files = 0;

/**
@type String
@const
*/
File.prototype.name = 0;
/**
@type Date
@const
*/
File.prototype.lastModifiedDate = 0;
File.prototype = new Blob();
File = {};

/**
@type Number
@const
*/
FileReader.prototype.EMPTY = 0;
/**
@type Number
@const
*/
FileReader.prototype.LOADING = 1;
/**
@type Number
@const
*/
FileReader.prototype.DONE = 2;
/**
@type Number
@const
*/
FileReader.prototype.readyState = 0;
/**
@type Object
@const
*/
FileReader.prototype.result = 0;
/**
@type Error
@const
*/
FileReader.prototype.error = 0;
/**
@type Function
*/
Object.defineProperty(FileReader, "onloadstart", { set: function(value) {} });
/**
@type Function
*/
Object.defineProperty(FileReader, "onprogress", { set: function(value) {} });
/**
@type Function
*/
Object.defineProperty(FileReader, "onload", { set: function(value) {} });
/**
@type Function
*/
Object.defineProperty(FileReader, "onabort", { set: function(value) {} });
/**
@type Function
*/
Object.defineProperty(FileReader, "onerror", { set: function(value) {} });
/**
@type Function
*/
Object.defineProperty(FileReader, "onloadend", { set: function(value) {} });
/**
@param {Blob} [blob]
@return void
*/
FileReader.prototype.readAsArrayBuffer = function(blob) {};
/**
@param {Blob} [blob]
@return void
*/
FileReader.prototype.readAsBinaryString = function(blob) {};
/**
@param {Blob} [blob]
@param {String} encoding
@return void
*/
FileReader.prototype.readAsText = function(blob,encoding) {};
/**
@param {Blob} [blob]
@return void
*/
FileReader.prototype.readAsDataURL = function(blob) {};
/**
@return void
*/
FileReader.prototype.abort = function() {};
FileReader.prototype = new EventTarget();
FileReader = {};

/**
@type DOMStringMap
@const
*/
Node.prototype.dataset = 0;
Node = {};

DOMStringMap = {};

/**
@param {Database} database
@return void
*/
DatabaseCallback.prototype.handleEvent = function(database) {};
DatabaseCallback = {};

/**
@type Function
*/
Notification.prototype.ondisplay = 0;
/**
@type Function
*/
Notification.prototype.onerror = 0;
/**
@type Function
*/
Notification.prototype.onclose = 0;
/**
@return void
*/
Notification.prototype.show = function() {};
/**
@return void
*/
Notification.prototype.cancel = function() {};
Notification.prototype = new EventTarget();
Notification = {};

MediaError = {};

/**
@type MediaError
@const
*/
HTMLMediaElement.prototype.error = 0;
/**
@type String
*/
HTMLMediaElement.prototype.src = 0;
/**
@type String
@const
*/
HTMLMediaElement.prototype.currentSrc = 0;
/**
@type Number
@const
*/
HTMLMediaElement.prototype.NETWORK_EMPTY = 0;
/**
@type Number
@const
*/
HTMLMediaElement.prototype.NETWORK_IDLE = 1;
/**
@type Number
@const
*/
HTMLMediaElement.prototype.NETWORK_LOADING = 2;
/**
@type Number
@const
*/
HTMLMediaElement.prototype.NETWORK_NO_SOURCE = 3;
/**
@type Number
@const
*/
HTMLMediaElement.prototype.networkState = 0;
/**
@type String
*/
HTMLMediaElement.prototype.preload = 0;
/**
@type TimeRanges
@const
*/
HTMLMediaElement.prototype.buffered = 0;
/**
@type Number
@const
*/
HTMLMediaElement.prototype.HAVE_NOTHING = 0;
/**
@type Number
@const
*/
HTMLMediaElement.prototype.HAVE_METADATA = 1;
/**
@type Number
@const
*/
HTMLMediaElement.prototype.HAVE_CURRENT_DATA = 2;
/**
@type Number
@const
*/
HTMLMediaElement.prototype.HAVE_FUTURE_DATA = 3;
/**
@type Number
@const
*/
HTMLMediaElement.prototype.HAVE_ENOUGH_DATA = 4;
/**
@type Number
@const
*/
HTMLMediaElement.prototype.readyState = 0;
/**
@type Boolean
@const
*/
HTMLMediaElement.prototype.seeking = 0;
/**
@type Number
*/
HTMLMediaElement.prototype.currentTime = 0;
/**
@type Number
@const
*/
HTMLMediaElement.prototype.startTime = 0;
/**
@type Number
@const
*/
HTMLMediaElement.prototype.duration = 0;
/**
@type Boolean
@const
*/
HTMLMediaElement.prototype.paused = 0;
/**
@type Number
*/
HTMLMediaElement.prototype.defaultPlaybackRate = 0;
/**
@type Number
*/
HTMLMediaElement.prototype.playbackRate = 0;
/**
@type TimeRanges
@const
*/
HTMLMediaElement.prototype.played = 0;
/**
@type TimeRanges
@const
*/
HTMLMediaElement.prototype.seekable = 0;
/**
@type Boolean
@const
*/
HTMLMediaElement.prototype.ended = 0;
/**
@type Boolean
*/
HTMLMediaElement.prototype.autoplay = 0;
/**
@type Boolean
*/
HTMLMediaElement.prototype.loop = 0;
/**
@type Boolean
*/
HTMLMediaElement.prototype.controls = 0;
/**
@type Number
*/
HTMLMediaElement.prototype.volume = 0;
/**
@type Boolean
*/
HTMLMediaElement.prototype.muted = 0;
/**
@type Array
@const
*/
HTMLMediaElement.prototype.tracks = 0;
/**
@return void
*/
HTMLMediaElement.prototype.load = function() {};
/**
@param {String} type
@return String
*/
HTMLMediaElement.prototype.canPlayType = function(type) {};
/**
@return void
*/
HTMLMediaElement.prototype.play = function() {};
/**
@return void
*/
HTMLMediaElement.prototype.pause = function() {};
/**
@param {String} label
@param {String} kind
@param {String} language
@return MutableTimedTrack
*/
HTMLMediaElement.prototype.addTrack = function(label,kind,language) {};
HTMLMediaElement.prototype = new HTMLElement();
HTMLMediaElement = {};

/**
@type Number
@const
*/
MediaError.prototype.MEDIA_ERR_ABORTED = 1;
/**
@type Number
@const
*/
MediaError.prototype.MEDIA_ERR_NETWORK = 2;
/**
@type Number
@const
*/
MediaError.prototype.MEDIA_ERR_DECODE = 3;
/**
@type Number
@const
*/
MediaError.prototype.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
/**
@type Number
@const
*/
MediaError.prototype.code = 0;
MediaError = {};

/**
@type Number
@const
*/
TimeRanges.prototype.length = 0;
/**
@param {Number} index
@return Number
*/
TimeRanges.prototype.start = function(index) {};
/**
@param {Number} index
@return Number
*/
TimeRanges.prototype.end = function(index) {};
TimeRanges = {};

/**
@type String
@const
*/
TimedTrack.prototype.kind = 0;
/**
@type String
@const
*/
TimedTrack.prototype.label = 0;
/**
@type String
@const
*/
TimedTrack.prototype.language = 0;
/**
@type Number
@const
*/
TimedTrack.prototype.NONE = 0;
/**
@type Number
@const
*/
TimedTrack.prototype.LOADING = 1;
/**
@type Number
@const
*/
TimedTrack.prototype.LOADED = 2;
/**
@type Number
@const
*/
TimedTrack.prototype.ERROR = 3;
/**
@type Number
@const
*/
TimedTrack.prototype.readyState = 0;
/**
@type Function
@const
*/
TimedTrack.prototype.onload = 0;
/**
@type Function
@const
*/
TimedTrack.prototype.onerror = 0;
/**
@type Number
@const
*/
TimedTrack.prototype.OFF = 0;
/**
@type Number
@const
*/
TimedTrack.prototype.HIDDEN = 1;
/**
@type Number
@const
*/
TimedTrack.prototype.SHOWING = 2;
/**
@type Number
*/
TimedTrack.prototype.mode = 0;
/**
@type TimedTrackCueList
@const
*/
TimedTrack.prototype.cues = 0;
/**
@type TimedTrackCueList
@const
*/
TimedTrack.prototype.activeCues = 0;
/**
@type Function
@const
*/
TimedTrack.prototype.onentercue = 0;
/**
@type Function
@const
*/
TimedTrack.prototype.onexitcue = 0;
TimedTrack = {};

/**
@param {TimedTrackCue} cue
@return void
*/
MutableTimedTrack.prototype.addCue = function(cue) {};
/**
@param {TimedTrackCue} cue
@return void
*/
MutableTimedTrack.prototype.removeCue = function(cue) {};
MutableTimedTrack.prototype = new TimedTrack();
MutableTimedTrack = {};

/**
@type TimedTrack
@const
*/
TimedTrackCue.prototype.track = 0;
/**
@type String
@const
*/
TimedTrackCue.prototype.id = 0;
/**
@type Number
@const
*/
TimedTrackCue.prototype.startTime = 0;
/**
@type Number
@const
*/
TimedTrackCue.prototype.endTime = 0;
/**
@type Boolean
@const
*/
TimedTrackCue.prototype.pauseOnExit = 0;
/**
@type String
@const
*/
TimedTrackCue.prototype.direction = 0;
/**
@type Boolean
@const
*/
TimedTrackCue.prototype.snapToLines = 0;
/**
@type Number
@const
*/
TimedTrackCue.prototype.linePosition = 0;
/**
@type Number
@const
*/
TimedTrackCue.prototype.textPosition = 0;
/**
@type Number
@const
*/
TimedTrackCue.prototype.size = 0;
/**
@type String
@const
*/
TimedTrackCue.prototype.alignment = 0;
/**
@type String
@const
*/
TimedTrackCue.prototype.voice = 0;
/**
@return String
*/
TimedTrackCue.prototype.getCueAsSource = function() {};
/**
@return DocumentFragment
*/
TimedTrackCue.prototype.getCueAsHTML = function() {};
/**
@param {String} id
@param {Number} startTime
@param {Number} endTime
@param {String} settings
@param {String} text
@param {Boolean} [pauseOnExit]
@return TimedTrackCue
*/
TimedTrackCue.prototype.TimedTrackCue = function(id,startTime,endTime,settings,text,pauseOnExit) {};
TimedTrackCue = {};

/**
@type Number
@const
*/
TimedTrackCueList.prototype.length = 0;
/**
@param {String} id
@return TimedTrackCue
*/
TimedTrackCueList.prototype.getCueById = function(id) {};
TimedTrackCueList = {};

/**
@type Number
*/
HTMLVideoElement.prototype.width = 0;
/**
@type Number
*/
HTMLVideoElement.prototype.height = 0;
/**
@type Number
@const
*/
HTMLVideoElement.prototype.videoWidth = 0;
/**
@type Number
@const
*/
HTMLVideoElement.prototype.videoHeight = 0;
/**
@type String
*/
HTMLVideoElement.prototype.poster = 0;
HTMLVideoElement.prototype = new HTMLMediaElement();
HTMLVideoElement = {};

/**
@type String
@const
*/
Database.prototype.version = 0;
/**
@param {SQLTransactionCallback|SQLTransactionSyncCallback|Function} callback
@param {SQLTransactionErrorCallback|Function} [errorCallback]
@param {SQLVoidCallback|Function} [successCallback]
*/
Database.prototype.transaction = function(callback,errorCallback,successCallback) {};
/**
@param {SQLTransactionCallback|SQLTransactionSyncCallback|Function} callback
@param {SQLTransactionErrorCallback|Function} [errorCallback]
@param {SQLVoidCallback|Function} [successCallback]
*/
Database.prototype.readTransaction = function(callback,errorCallback,successCallback) {};
/**
@param {String} oldVersion
@param {String} newVersion
@param {SQLTransactionCallback|Function} [callback]
@param {SQLTransactionErrorCallback|Function} [errorCallback]
@param {SQLVoidCallback|Function} [successCallback]
*/
Database.prototype.changeVersion = function(oldVersion,newVersion,callback,errorCallback,successCallback) {};
Database = {};

/**
@return void
*/
SQLVoidCallback.prototype.handleEvent = function() {};
SQLVoidCallback = {};

/**
@param {SQLTransaction} [transaction]
@return void
*/
SQLTransactionCallback.prototype.handleEvent = function(transaction) {};
SQLTransactionCallback = {};

/**
@param {SQLError} [error]
@return void
*/
SQLTransactionErrorCallback.prototype.handleEvent = function(error) {};
SQLTransactionErrorCallback = {};

/**
@param {String} sqlStatement
@param {Arguments} [arguments]
@param {SQLStatementCallback} [callback]
@param {SQLStatementErrorCallback} [errorCallback]
@return void
*/
SQLTransaction.prototype.executeSql = function(sqlStatement,arguments,callback,errorCallback) {};
SQLTransaction = {};

/**
@param {SQLTransaction} [transaction]
@param {SQLResultSet} [resultSet]
@return void
*/
SQLStatementCallback.prototype.handleEvent = function(transaction,resultSet) {};
SQLStatementCallback = {};

/**
@param {SQLTransaction} [transaction]
@param {SQLError} [error]
@return Boolean
*/
SQLStatementErrorCallback.prototype.handleEvent = function(transaction,error) {};
SQLStatementErrorCallback = {};

/**
@param {SQLTransactionSync} [transaction]
@return void
*/
SQLTransactionSyncCallback.prototype.handleEvent = function(transaction) {};
SQLTransactionSyncCallback = {};

/**
@param {String} sqlStatement
@param {Arguments} [arguments]
@return SQLResultSet
*/
SQLTransactionSync.prototype.executeSql = function(sqlStatement,arguments) {};
SQLTransactionSync = {};

/**
@type Number
@const
*/
SQLResultSet.prototype.insertId = 0;
/**
@type Number
@const
*/
SQLResultSet.prototype.rowsAffected = 0;
/**
@type SQLResultSetRowList
@const
*/
SQLResultSet.prototype.rows = 0;
SQLResultSet = {};

/**
@type Number
@const
*/
SQLResultSetRowList.prototype.length = 0;
/**
@param {Number} index
*/
SQLResultSetRowList.prototype.item = function(index) {};
SQLResultSetRowList = {};

/**
@type Number
@const
*/
SQLError.prototype.UNKNOWN_ERR = 0;
/**
@type Number
@const
*/
SQLError.prototype.DATABASE_ERR = 1;
/**
@type Number
@const
*/
SQLError.prototype.VERSION_ERR = 2;
/**
@type Number
@const
*/
SQLError.prototype.TOO_LARGE_ERR = 3;
/**
@type Number
@const
*/
SQLError.prototype.QUOTA_ERR = 4;
/**
@type Number
@const
*/
SQLError.prototype.SYNTAX_ERR = 5;
/**
@type Number
@const
*/
SQLError.prototype.CONSTRAINT_ERR = 6;
/**
@type Number
@const
*/
SQLError.prototype.TIMEOUT_ERR = 7;
/**
@type Number
@const
*/
SQLError.prototype.code = 0;
/**
@type String
@const
*/
SQLError.prototype.message = 0;
SQLError = {};

/**
@type String
@const
*/
MessageEvent.prototype.data = 0;
/**
@type String
@const
*/
MessageEvent.prototype.origin = 0;
/**
@type String
@const
*/
MessageEvent.prototype.lastEventId = 0;
/**
@type Window
@const
*/
MessageEvent.prototype.source = 0;
/**
@type MessagePortArray
@const
*/
MessageEvent.prototype.ports = 0;
MessageEvent.prototype = new Event();
MessageEvent = {};

/**
@type Number
@const
*/
History.prototype.length = 0;
/**
@type Object
@const
*/
History.prototype.state = 0;
/**
@param {Object} [data]
@param {String} [title]
@param {String} url
@return void
*/
History.prototype.pushState = function(data,title,url) {};
/**
@param {Object} [data]
@param {String} [title]
@param {String} url
@return void
*/
History.prototype.replaceState = function(data,title,url) {};
History = {};

/**
@param {String} [url]
@return void
*/
Location.prototype.assign = function(url) {};
/**
@param {String} [url]
@return String
*/
Location.prototype.resolveURL = function(url) {};
Location = {};

/**
@type Number
@const
*/
SQLException.prototype.UNKNOWN_ERR = 0;
/**
@type Number
@const
*/
SQLException.prototype.DATABASE_ERR = 1;
/**
@type Number
@const
*/
SQLException.prototype.VERSION_ERR = 2;
/**
@type Number
@const
*/
SQLException.prototype.TOO_LARGE_ERR = 3;
/**
@type Number
@const
*/
SQLException.prototype.QUOTA_ERR = 4;
/**
@type Number
@const
*/
SQLException.prototype.SYNTAX_ERR = 5;
/**
@type Number
@const
*/
SQLException.prototype.CONSTRAINT_ERR = 6;
/**
@type Number
@const
*/
SQLException.prototype.TIMEOUT_ERR = 7;
/**
@type Number
@const
*/
SQLException.prototype.code = 0;
/**
@type String
@const
*/
SQLException.prototype.message = 0;
SQLException.prototype = new Error();
SQLException = {};

/**
@type String
*/
HTMLImageElement.prototype.crossOrigin = 0;

/**
@type Number
*/
HTMLCanvasElement.prototype.width = 0;
/**
@type Number
*/
HTMLCanvasElement.prototype.height = 0;
/**
@param {String} context
@param {...*} args
@return CanvasRenderingContext2D
*/
HTMLCanvasElement.prototype.getContext = function(context,args) {};
/**
@param {String} [string]
@param [args]
@return String
*/
HTMLCanvasElement.prototype.toDataURL = function(string,args) {};
HTMLCanvasElement.prototype = new HtmlElement();
HTMLCanvasElement = {};

/**
@type HTMLCanvasElement
@const
*/
CanvasRenderingContext2D.prototype.canvas = 0;
/**
@type Number
*/
CanvasRenderingContext2D.prototype.globalAlpha = 0;
/**
@type String
*/
CanvasRenderingContext2D.prototype.globalCompositeOperation = 0;
CanvasRenderingContext2D.prototype.fillStyle = 0;
CanvasRenderingContext2D.prototype.strokeStyle = 0;
/**
@type Number
*/
CanvasRenderingContext2D.prototype.lineWidth = 0;
/**
@type String
*/
CanvasRenderingContext2D.prototype.lineCap = 0;
/**
@type String
*/
CanvasRenderingContext2D.prototype.lineJoin = 0;
/**
@type Number
*/
CanvasRenderingContext2D.prototype.miterLimit = 0;
/**
@type Number
*/
CanvasRenderingContext2D.prototype.shadowOffsetX = 0;
/**
@type Number
*/
CanvasRenderingContext2D.prototype.shadowOffsetY = 0;
/**
@type Number
*/
CanvasRenderingContext2D.prototype.shadowBlur = 0;
/**
@type String
*/
CanvasRenderingContext2D.prototype.shadowColor = 0;
/**
@type String
*/
CanvasRenderingContext2D.prototype.font = 0;
/**
@type String
*/
CanvasRenderingContext2D.prototype.textAlign = 0;
/**
@type String
*/
CanvasRenderingContext2D.prototype.textBaseline = 0;
CanvasRenderingContext2D.prototype.save = function() {};
CanvasRenderingContext2D.prototype.restore = function() {};
/**
@param {Number} x
@param {Number} y
*/
CanvasRenderingContext2D.prototype.scale = function(x,y) {};
/**
@param {Number} angle
*/
CanvasRenderingContext2D.prototype.rotate = function(angle) {};
/**
@param {Number} x
@param {Number} y
*/
CanvasRenderingContext2D.prototype.translate = function(x,y) {};
/**
@param {Number} m11
@param {Number} m12
@param {Number} m21
@param {Number} m22
@param {Number} dx
@param {Number} dy
*/
CanvasRenderingContext2D.prototype.transform = function(m11,m12,m21,m22,dx,dy) {};
/**
@param {Number} m11
@param {Number} m12
@param {Number} m21
@param {Number} m22
@param {Number} dx
@param {Number} dy
*/
CanvasRenderingContext2D.prototype.setTransform = function(m11,m12,m21,m22,dx,dy) {};
/**
@param {Number} x0
@param {Number} y0
@param {Number} x1
@param {Number} y1
@return CanvasGradient
*/
CanvasRenderingContext2D.prototype.createLinearGradient = function(x0,y0,x1,y1) {};
/**
@param {Number} x0
@param {Number} y0
@param {Number} r0
@param {Number} x1
@param {Number} y1
@param {Number} r1
@return CanvasGradient
*/
CanvasRenderingContext2D.prototype.createRadialGradient = function(x0,y0,r0,x1,y1,r1) {};
/**
@param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} image
@param {String} repetition
@return CanvasPattern
*/
CanvasRenderingContext2D.prototype.createPattern = function(image,repetition) {};
/**
@param {Number} x
@param {Number} y
@param {Number} w
@param {Number} h
*/
CanvasRenderingContext2D.prototype.clearRect = function(x,y,w,h) {};
/**
@param {Number} x
@param {Number} y
@param {Number} w
@param {Number} h
*/
CanvasRenderingContext2D.prototype.fillRect = function(x,y,w,h) {};
/**
@param {Number} x
@param {Number} y
@param {Number} w
@param {Number} h
*/
CanvasRenderingContext2D.prototype.strokeRect = function(x,y,w,h) {};
CanvasRenderingContext2D.prototype.beginPath = function() {};
CanvasRenderingContext2D.prototype.closePath = function() {};
/**
@param {Number} x
@param {Number} y
*/
CanvasRenderingContext2D.prototype.moveTo = function(x,y) {};
/**
@param {Number} x
@param {Number} y
*/
CanvasRenderingContext2D.prototype.lineTo = function(x,y) {};
/**
@param {Number} cpx
@param {Number} cpy
@param {Number} x
@param {Number} y
*/
CanvasRenderingContext2D.prototype.quadraticCurveTo = function(cpx,cpy,x,y) {};
/**
@param {Number} cp1x
@param {Number} cp1y
@param {Number} cp2x
@param {Number} cp2y
@param {Number} x
@param {Number} y
*/
CanvasRenderingContext2D.prototype.bezierCurveTo = function(cp1x,cp1y,cp2x,cp2y,x,y) {};
/**
@param {Number} x1
@param {Number} y1
@param {Number} x2
@param {Number} y2
@param {Number} radius
*/
CanvasRenderingContext2D.prototype.arcTo = function(x1,y1,x2,y2,radius) {};
/**
@param {Number} x
@param {Number} y
@param {Number} w
@param {Number} h
*/
CanvasRenderingContext2D.prototype.rect = function(x,y,w,h) {};
/**
@param {Number} x
@param {Number} y
@param {Number} radius
@param {Number} startAngle
@param {Number} endAngle
@param {Boolean} anticlockwise
*/
CanvasRenderingContext2D.prototype.arc = function(x,y,radius,startAngle,endAngle,anticlockwise) {};
CanvasRenderingContext2D.prototype.fill = function() {};
CanvasRenderingContext2D.prototype.stroke = function() {};
CanvasRenderingContext2D.prototype.clip = function() {};
/**
@param {Number} x
@param {Number} y
@return Boolean
*/
CanvasRenderingContext2D.prototype.isPointInPath = function(x,y) {};
/**
@param {Element} element
@param {Number} xCaret
@param {Number} yCaret
@param {Boolean} [canDrawCustom]
*/
CanvasRenderingContext2D.prototype.drawFocusRing = function(element,xCaret,yCaret,canDrawCustom) {};
/**
@param {String} text
@param {Number} x
@param {Number} y
@param {Number} [maxWidth]
*/
CanvasRenderingContext2D.prototype.fillText = function(text,x,y,maxWidth) {};
/**
@param {String} text
@param {Number} x
@param {Number} y
@param {Number} [maxWidth]
*/
CanvasRenderingContext2D.prototype.strokeText = function(text,x,y,maxWidth) {};
/**
@param {String} text
@return TextMetrics
*/
CanvasRenderingContext2D.prototype.measureText = function(text) {};
/**
@param {Element} img_elem
@param {Number} dx_or_sx
@param {Number} dy_or_sy
@param {Number} [dw_or_sw]
@param {Number} [dh_or_sh]
@param {Number} [dx]
@param {Number} [dy]
@param {Number} [dw]
@param {Number} [dh]
*/
CanvasRenderingContext2D.prototype.drawImage = function(img_elem,dx_or_sx,dy_or_sy,dw_or_sw,dh_or_sh,dx,dy,dw,dh) {};
/**
@param {ImageData|Number} imagedata_or_sw
@param {Number} [sh]
@return ImageData
*/
CanvasRenderingContext2D.prototype.createImageData = function(imagedata_or_sw,sh) {};
/**
@param {Number} sx
@param {Number} sy
@param {Number} sw
@param {Number} sh
@return ImageData
*/
CanvasRenderingContext2D.prototype.getImageData = function(sx,sy,sw,sh) {};
/**
@param {ImageData} image_data
@param {Number} dx
@param {Number} dy
@param {Number} [dirtyX]
@param {Number} [dirtyY]
@param {Number} [dirtyWidth]
@param {Number} [dirtyHeight]
*/
CanvasRenderingContext2D.prototype.putImageData = function(image_data,dx,dy,dirtyX,dirtyY,dirtyWidth,dirtyHeight) {};
CanvasRenderingContext2D = {};

/**
@param {Number} offset
@param {String} color
*/
CanvasGradient.prototype.addColorStop = function(offset,color) {};
CanvasGradient = {};

/**
@type CanvasPixelArray
@const
*/
ImageData.prototype.data = 0;
/**
@type Number
@const
*/
ImageData.prototype.width = 0;
/**
@type Number
@const
*/
ImageData.prototype.height = 0;
ImageData = {};

/**
@type Number
@const
*/
CanvasPixelArray.prototype.length = 0;
CanvasPixelArray = {};

/**
@type Number
@const
*/
TextMetrics.prototype.width = 0;
TextMetrics = {};

/**
@type WorkerNavigator
@const
*/
window.navigator = 0;
/**
@type Storage
@const
*/
window.localStorage = 0;
/**
@type Storage
@const
*/
window.sessionStorage = 0;
/**
@param {Function} callback
@param {Element} element
@return Number
*/
window.webkitRequestAnimationFrame = function(callback,element) {};
/**
@return void
*/
window.webkitCancelRequestAnimationFrame = function(handle) {};
/**
@param {Function} callback
@return Number
*/
window.msRequestAnimationFrame = function(callback) {};
/**
@return void
*/
window.msCancelRequestAnimationFrame = function(handle) {};
/**
@param {Function} callback
@return Number
*/
window.oRequestAnimationFrame = function(callback) {};
/**
@return void
*/
window.oCancelRequestAnimationFrame = function(handle) {};
/**
@param {Function} callback
@return Number
*/
window.mozRequestAnimationFrame = function(callback) {};
/**
@return void
*/
window.mozCancelRequestAnimationFrame = function(handle) {};
/**
@param {Function} callback
@param {Element} element
@return Number
*/
window.requestAnimationFrame = function(callback,element) {};
/**
@return void
*/
window.cancelRequestAnimationFrame = function(handle) {};
/**
@param {...String} [urls]
@return void
*/
window.importScripts = function(urls) {};
/**
@param {String} name
@param {String} version
@param {String} displayName
@param {Number} estimatedSize
@param {DatabaseCallback|Function} [creationCallback]
@return Database
*/
window.openDatabase = function(name,version,displayName,estimatedSize,creationCallback) {};
/**
@param {String} name
@param {String} version
@param {String} displayName
@param {Number} estimatedSize
@param {DatabaseCallback|Function} [creationCallback]
@return Database
*/
window.openDatabaseSync = function(name,version,displayName,estimatedSize,creationCallback) {};

WorkerNavigator = {};

/**
@type Function
*/
AbstractWorker.prototype.onerror = 0;
AbstractWorker = {};

/**
@type Function
*/
Worker.prototype.onmessage = 0;
Worker.prototype.terminate = function() {};
/**
@param message
@param {MessagePortArray} [ports]
*/
Worker.prototype.postMessage = function(message,ports) {};
Worker.prototype = new AbstractWorker();
Worker = {};

/**
@type Function
@const
*/
SharedWorker.prototype.port = 0;
SharedWorker.prototype = new AbstractWorker();
SharedWorker = {};

/**
@type Number
@const
*/
Storage.prototype.length = 0;
/**
@param {Number} index
@return String
*/
Storage.prototype.key = function(index) {};
/**
@param {String} key
*/
Storage.prototype.getItem = function(key) {};
/**
@param {String} key
@param data
@return void
*/
Storage.prototype.setItem = function(key,data) {};
/**
@param {String} key
@return void
*/
Storage.prototype.removeItem = function(key) {};
/**
@return void
*/
Storage.prototype.clear = function() {};
Storage = {};

/**
@type String
*/
WebSocket.prototype.url = 0;
/**
@type Number
@const
*/
WebSocket.prototype.CONNECTING = 0;
/**
@type Number
@const
*/
WebSocket.prototype.OPEN = 1;
/**
@type Number
@const
*/
WebSocket.prototype.CLOSING = 2;
/**
@type Number
@const
*/
WebSocket.prototype.CLOSED = 3;
/**
@type Number
@const
*/
WebSocket.prototype.readyState = 0;
/**
@type Number
@const
*/
WebSocket.prototype.bufferedAmount = 0;
/**
@type Function
*/
WebSocket.prototype.onopen = 0;
/**
@type Function
*/
WebSocket.prototype.onmessage = 0;
/**
@type Function
*/
WebSocket.prototype.onerror = 0;
/**
@type Function
*/
WebSocket.prototype.onclose = 0;
/**
@param {String} data
@return Boolean
*/
WebSocket.prototype.send = function(data) {};
/**
@return void
*/
WebSocket.prototype.close = function() {};
WebSocket = {};

/**
@type Number
*/
ArrayBuffer.prototype.byteLength = 0;
/**
@param {Number} length
@constructor
*/
function ArrayBuffer(length) {}

/**
@type ArrayBuffer
@const
*/
DataView.prototype.buffer = 0;
/**
@type Number
@const
*/
DataView.prototype.byteOffset = 0;
/**
@type Number
@const
*/
DataView.prototype.byteLength = 0;
/**
@param bufferOrArrayOrLength
@param {Number} [byteOffset]
@param {Number} [length]
@constructor
*/
function DataView(bufferOrArrayOrLength,byteOffset,length) {}
/**
@param {Number} [byteOffset]
@return Number
*/
DataView.prototype.getInt8 = function(byteOffset) {};

/**
@type ArrayBuffer
@const
*/
ArrayBufferView.prototype.buffer = 0;
/**
@type Number
@const
*/
ArrayBufferView.prototype.byteOffset = 0;
/**
@type Number
@const
*/
ArrayBufferView.prototype.byteLength = 0;
/**
@constructor
*/
function ArrayBufferView() {}

Int8Array.prototype.length = 0;
/**
@type Number
@const
*/
Int8Array.prototype.BYTES_PER_ELEMENT = 8;
/**
@param bufferOrArrayOrLength
@param {Number} [byteOffset]
@param {Number} [length]
@constructor
*/
function Int8Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
@param {Int8Array} array
@param {Number} [offset]
@return void
*/
Int8Array.prototype.set = function(array,offset) {};
/**
@param {Number} begin
@param {Number} [end]
@return Int8Array
*/
Int8Array.prototype.subarray = function(begin,end) {};
Int8Array.prototype = new ArrayBufferView();

Uint8Array.prototype.length = 0;
/**
@type Number
@const
*/
Uint8Array.prototype.BYTES_PER_ELEMENT = 8;
/**
@param bufferOrArrayOrLength
@param {Number} [byteOffset]
@param {Number} [length]
@constructor
*/
function Uint8Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
@param {Uint8Array} array
@param {Number} [offset]
@return void
*/
Uint8Array.prototype.set = function(array,offset) {};
/**
@param {Number} begin
@param {Number} [end]
@return Uint8Array
*/
Uint8Array.prototype.subarray = function(begin,end) {};
Uint8Array.prototype = new ArrayBufferView();

Int16Array.prototype.length = 0;
/**
@type Number
@const
*/
Int16Array.prototype.BYTES_PER_ELEMENT = 16;
/**
@param bufferOrArrayOrLength
@param {Number} [byteOffset]
@param {Number} [length]
@constructor
*/
function Int16Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
@param {Int16Array} array
@param {Number} [offset]
@return void
*/
Int16Array.prototype.set = function(array,offset) {};
/**
@param {Number} begin
@param {Number} [end]
@return Int16Array
*/
Int16Array.prototype.subarray = function(begin,end) {};
Int16Array.prototype = new ArrayBufferView();

Uint16Array.prototype.length = 0;
/**
@type Number
@const
*/
Uint16Array.prototype.BYTES_PER_ELEMENT = 16;
/**
@param bufferOrArrayOrLength
@param {Number} [byteOffset]
@param {Number} [length]
@constructor
*/
function Uint16Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
@param {Uint16Array} array
@param {Number} [offset]
@return void
*/
Uint16Array.prototype.set = function(array,offset) {};
/**
@param {Number} begin
@param {Number} [end]
@return Uint16Array
*/
Uint16Array.prototype.subarray = function(begin,end) {};
Uint16Array.prototype = new ArrayBufferView();

Int32Array.prototype.length = 0;
/**
@type Number
@const
*/
Int32Array.prototype.BYTES_PER_ELEMENT = 32;
/**
@param bufferOrArrayOrLength
@param {Number} [byteOffset]
@param {Number} [length]
@constructor
*/
function Int32Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
@param {Int32Array} array
@param {Number} [offset]
@return void
*/
Int32Array.prototype.set = function(array,offset) {};
/**
@param {Number} begin
@param {Number} [end]
@return Int32Array
*/
Int32Array.prototype.subarray = function(begin,end) {};
Int32Array.prototype = new ArrayBufferView();

Uint32Array.prototype.length = 0;
/**
@type Number
@const
*/
Uint32Array.prototype.BYTES_PER_ELEMENT = 32;
/**
@param bufferOrArrayOrLength
@param {Number} [byteOffset]
@param {Number} [length]
@constructor
*/
function Uint32Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
@param {Uint32Array} array
@param {Number} [offset]
@return void
*/
Uint32Array.prototype.set = function(array,offset) {};
/**
@param {Number} begin
@param {Number} [end]
@return Uint32Array
*/
Uint32Array.prototype.subarray = function(begin,end) {};
Uint32Array.prototype = new ArrayBufferView();

Float32Array.prototype.length = 0;
/**
@type Number
@const
*/
Float32Array.prototype.BYTES_PER_ELEMENT = 32;
/**
@param bufferOrArrayOrLength
@param {Number} [byteOffset]
@param {Number} [length]
@constructor
*/
function Float32Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
@param {Float32Array} array
@param {Number} [offset]
@return void
*/
Float32Array.prototype.set = function(array,offset) {};
/**
@param {Number} begin
@param {Number} [end]
@return Float32Array
*/
Float32Array.prototype.subarray = function(begin,end) {};
Float32Array.prototype = new ArrayBufferView();

Float64Array.prototype.length = 0;
/**
@type Number
@const
*/
Float64Array.prototype.BYTES_PER_ELEMENT = 64;
/**
@param bufferOrArrayOrLength
@param {Number} [byteOffset]
@param {Number} [length]
@constructor
*/
function Float64Array(bufferOrArrayOrLength,byteOffset,length) {}
/**
@param {Float64Array} array
@param {Number} [offset]
@return void
*/
Float64Array.prototype.set = function(array,offset) {};
/**
@param {Number} begin
@param {Number} [end]
@return Float64Array
*/
Float64Array.prototype.subarray = function(begin,end) {};
Float64Array.prototype = new ArrayBufferView();

/**
@param {Function} successCallback
@param {Function} [errorCallback]
@param {Object} [options]
@return void
*/
Geolocation.prototype.getCurrentPosition = function(successCallback,errorCallback,options) {};
/**
@param {Function} successCallback
@param {Function} [errorCallback]
@param {Object} [options]
@return Number
*/
Geolocation.prototype.watchPosition = function(successCallback,errorCallback,options) {};
/**
@param {Number} [watchId]
*/
Geolocation.prototype.clearWatch = function(watchId) {};
Geolocation = {};

/**
@type Geolocation
@const
*/
Navigator.prototype.geolocation = 0;
Navigator = {};

/**
@type Boolean
*/
PositionOptions.prototype.enableHighAccuracy = 0;
/**
@type Number
*/
PositionOptions.prototype.timeout = 0;
/**
@type Number
*/
PositionOptions.prototype.maximumAge = 0;
PositionOptions = {};

/**
@type Coordinates
*/
Position.prototype.coords = 0;
/**
@type Number
*/
Position.prototype.timestamp = 0;
Position = {};

/**
@type Number
@const
*/
Coordinates.prototype.latitude = 0;
/**
@type Number
@const
*/
Coordinates.prototype.longitude = 0;
/**
@type Number
@const
*/
Coordinates.prototype.altitude = 0;
/**
@type Number
@const
*/
Coordinates.prototype.accuracy = 0;
/**
@type Number
@const
*/
Coordinates.prototype.altitudeAccuracy = 0;
/**
@type Number
@const
*/
Coordinates.prototype.heading = 0;
/**
@type Number
@const
*/
Coordinates.prototype.speed = 0;
Coordinates = {};

/**
@type Number
@const
*/
PositionError.prototype.PERMISSION_DENIED = 1;
/**
@type Number
@const
*/
PositionError.prototype.POSITION_UNAVAILABLE = 2;
/**
@type Number
@const
*/
PositionError.prototype.TIMEOUT = 3;
/**
@type Number
@const
*/
PositionError.prototype.code = 0;
/**
@type String
@const
*/
PositionError.prototype.message = 0;
PositionError = {};

/**
@type String
*/
XMLHttpRequest.prototype.responseType = 0;
/**
@type Object
*/
XMLHttpRequest.prototype.response = 0;

/**
@param {String} name
@param value
@return void
*/
FormData.prototype.append = function(name,value) {};
FormData = {};
