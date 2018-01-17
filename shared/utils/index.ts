import Core from "./core";
import Type from "./type";
import Boolean from "./boolean";
//import Base64 from "./base64";
import Cookie from "./cookie";
import JSON from "./json";
import Object from "./object";
import Dom from "./domUtil";
import Event from "./event";
import File from "./file";
import KeyCode from "./keyCode";
import Number from "./number";
import String from "./string";
import Url from "./url";
import Array from "./array";
import Storage from "./storage";
import CSS from "./css";
//import Device from "./device";
import ResourceHelper from "./resourceHelper";
import Scripts from "./scripts";

export default {
    isNull: Core.isNull,
    isNotNull: Core.isNotNull,
    isEmpty: Core.isEmpty,
    coalesce: Core.coalesce,
    guid: Core.guid,
    Type, Boolean, Cookie, JSON, Object, Dom,
    Event, File, KeyCode, Number, String, Url, Array,
    Storage, CSS, ResourceHelper, Scripts
};
