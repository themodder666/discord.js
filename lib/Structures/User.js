"use strict";

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _UtilEquality = require("../Util/Equality");

var _UtilEquality2 = _interopRequireDefault(_UtilEquality);

var _Constants = require("../Constants");

var _UtilArgumentRegulariser = require("../Util/ArgumentRegulariser");

var User = (function (_Equality) {
	_inherits(User, _Equality);

	function User(data, client) {
		_classCallCheck(this, User);

		_Equality.call(this);
		this.client = client;
		this.username = data.username;
		this.discriminator = data.discriminator;
		this.id = data.id;
		this.avatar = data.avatar;
		this.status = data.status || "offline";
		this.gameID = data.game_id || null;
		this.typing = {
			since: null,
			channel: null
		};
	}

	User.prototype.mention = function mention() {
		return "<@" + this.id + ">";
	};

	User.prototype.toString = function toString() {
		return this.mention();
	};

	User.prototype.equalsStrict = function equalsStrict(obj) {
		if (obj instanceof User) return this.id === obj.id && this.username === obj.username && this.discriminator === obj.discriminator && this.avatar === obj.avatar && this.status === obj.status && this.gameID === obj.gameID;else return false;
	};

	User.prototype.equals = function equals(obj) {
		if (obj instanceof User) return this.id === obj.id && this.username === obj.username && this.discriminator === obj.discriminator && this.avatar === obj.avatar;else return false;
	};

	User.prototype.sendMessage = function sendMessage() {
		return this.client.sendMessage.apply(this.client, _UtilArgumentRegulariser.reg(this, arguments));
	};

	User.prototype.send = function send() {
		return this.client.sendMessage.apply(this.client, _UtilArgumentRegulariser.reg(this, arguments));
	};

	User.prototype.sendTTSMessage = function sendTTSMessage() {
		return this.client.sendTTSMessage.apply(this.client, _UtilArgumentRegulariser.reg(this, arguments));
	};

	User.prototype.sendTTS = function sendTTS() {
		return this.client.sendTTSMessage.apply(this.client, _UtilArgumentRegulariser.reg(this, arguments));
	};

	User.prototype.addTo = function addTo(role, callback) {
		return this.client.addMemberToRole.apply(this.client, [this, role, callback]);
	};

	User.prototype.removeFrom = function removeFrom(role, callback) {
		return this.client.removeMemberFromRole.apply(this.client, [this, role, callback]);
	};

	_createClass(User, [{
		key: "avatarURL",
		get: function get() {
			if (!this.avatar) {
				return null;
			} else {
				return _Constants.Endpoints.AVATAR(this.id, this.avatar);
			}
		}
	}]);

	return User;
})(_UtilEquality2["default"]);

exports["default"] = User;
module.exports = exports["default"];