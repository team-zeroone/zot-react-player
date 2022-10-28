"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLATFORMS = void 0;
var react_1 = __importDefault(require("react"));
var plyr_1 = __importDefault(require("plyr"));
require("plyr/dist/plyr.css");
var PLATFORMS;
(function (PLATFORMS) {
    PLATFORMS["YOUTUBE"] = "YOUTUBE";
    PLATFORMS["VIMEO"] = "VIMEO";
})(PLATFORMS = exports.PLATFORMS || (exports.PLATFORMS = {}));
var ZotPlayer = function (props) {
    var _a = react_1.default.useState(null), player = _a[0], setPlayer = _a[1];
    react_1.default.useEffect(function () {
        var playerInstance = new plyr_1.default("#player");
        setPlayer(playerInstance);
        return function () {
            playerInstance.destroy();
        };
    }, []);
    var getSource = function (platform) {
        return platform === PLATFORMS.VIMEO
            ? "https://player.vimeo.com/video/".concat(props.sourceId)
            : props.platform === PLATFORMS.YOUTUBE
                ? "https://www.youtube-nocookie.com/embed/".concat(props.sourceId)
                : '';
    };
    var source = getSource(props.platform);
    return (react_1.default.createElement("div", { style: {
            width: props.width ? props.width : '500px',
            height: props.height ? props.height : '250px',
        } },
        react_1.default.createElement("div", { id: "player" },
            react_1.default.createElement("iframe", { title: props.sourceId, src: source }))));
};
exports.default = ZotPlayer;
