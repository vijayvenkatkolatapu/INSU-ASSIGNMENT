function TrustLogo(t, e, L) {
    return host = location.host, current_code = e, tLUC(t, e, e, L)
}

function TrustLogo_MouseOver(t, e) {
    return tLL(t, e)
}

function TrustLogo_MouseMove(t, e) {
    return tLM(t, e)
}

function TrustLogo_MouseOut(t, e) {
    return tLN(t, e)
}

function TrustLogo_Credentials(t, e) {
    return tLWC(t, e)
}

function tLL(t, e) {
    tLeB(t, tLiB(tLMC, e), tLRC(e))
}

function tLM(t, e) {
    tLXB(t)
}

function tLN(t, e) {
    tLTC(tLRC(e))
}

function tLWC(t, e) {
    tLXC(tLiB(tLLC, e))
}

function tLXC(t) {
    window.open(t, "tl_wnd_credentials" + (new Date).getTime(), tLYC)
}

function tLZC(t) {
    var e;
    for (e = 0; e < tLO.length; e++)
        if (tLO[e].src == t) return;
    var L = new Image;
    L.src = t, tLO[tLO.length] = L
}

function tLaC(t) {
    tLZC(tLbC + "seal_bg.gif"), tLZC(tLbC + "warranty_level.gif")
}

function tLX(t) {
    return String(t).replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\'/g, "&#27;").replace(/\"/g, "&#22;")
}

function tLY(t) {
    return String(t).replace(/\%/g, "%25").replace(/\#/g, "%23").replace(/\&/g, "%26").replace(/\?/g, "%3f").replace(/\+/g, "%2b").replace(/\=/g, "%3d").replace(/\ /g, "+").replace(/\%/g, "%25")
}

function tLiB(t, e) {
    return t + "v_shortname=" + tLY(e) + "&v_search=" + tLY(window.location.protocol + "//" + host + escape(window.location.pathname)) + tLNC
}

function tLQC(t) {
    return "if(window.open('" + tLX(tLiB(tLLC, t)) + "','tl_wnd_credentials'+(new Date()).getTime(),'" + tLYC + "')){};tLlB(tLTB);"
}

function tLRC(t) {
    var e = "tl_popup";
    return tLi() && !tLo() ? e += t : tLi() && tLo() && (e += t), e
}

function tL1C(t, e, L) {
    var n = t.split(".");
    if (n.length < 2) return "";
    for (var o = tLyC + e + "/" + L + "/" + n[n.length - 1], r = n.length - 2; r >= 0; r--) o = o + "/" + n[r].substr(0, 2) + "/" + n[r];
    return o = o + "/" + t + "." + e + "." + L + ".gif", o = o.toLowerCase()
}

function tL0C(t, e) {
    return t ? (1 == t && (t = "small"), ("small" == t || "large" == t) && (t = tL1C(host, e, t)), t) : !1
}

function tL9C(t, e) {
    t && e && (e[0] = e[0] + t.offsetLeft, e[1] = e[1] + t.offsetTop, t.offsetParent && (e[0] = e[0] - t.scrollLeft, e[1] = e[1] - t.scrollTop, tL9C(t.offsetParent, e)))
}

function tL2C() {
    var t = tLJB("tL4C");
    t.style.pixelLeft = 0, t.style.pixelTop = 0, t.style.display = "block";
    for (var e = 0, L = 0, n = t.offsetParent; n; n = n.offsetParent) e += n.clientLeft + n.offsetLeft - n.scrollLeft, L += n.clientTop + n.offsetTop - n.scrollTop;
    e -= tL_C().clientLeft - tL_C().scrollLeft, L -= tL_C().clientTop - tL_C().scrollTop, "topright" == tLzC ? (t.style.pixelLeft = e + tL_C().scrollLeft + tL_C().clientWidth - t.offsetWidth, t.style.pixelTop = L + tL_C().scrollTop) : "bottomright" == tLzC ? (t.style.pixelLeft = e + tL_C().scrollLeft + tL_C().clientWidth - t.offsetWidth, t.style.pixelTop = L + tL_C().scrollTop + tL_C().clientHeight - t.offsetHeight) : "bottomleft" == tLzC ? (t.style.pixelLeft = e + tL_C().scrollLeft, t.style.pixelTop = L + tL_C().scrollTop + tL_C().clientHeight - t.offsetHeight) : "topleft" == tLzC && (t.style.pixelLeft = e + tL_C().scrollLeft, t.style.pixelTop = L + tL_C().scrollTop), t.style.display = "block"
}

function tL3C() {
    window.attachEvent("onscroll", tL2C), window.attachEvent("onresize", tL2C), window.attachEvent("onreadystatechange", tL2C), window.attachEvent("onload", tL2C), tLIC(tL2C, 100), tLIC(tL2C, 250), tLIC(tL2C, 500), tLIC(tL2C, 1e3), tLIC(tL2C, 2e3), tLIC(tL2C, 4e3), tLIC(tL2C, 8e3)
}

function tLUC(t, e, L, n) {
    tLy() || (n = !1), t = tL0C(t, L), tLaC(L);
    var o = tLRC(L),
        r = ' style="position:absolute;z-index:0;visibility: hidden;background-color: transparent;overflow:hidden;"';
    if (tLi() && !tLo()) {
        if (n && (n = n.toString().toLowerCase(), "topright" != n && "topleft" != n && "bottomright" != n && "bottomleft" != n && "none" != n && (n = "topright"), "none" == n && (n = !1), tLzC = n), !tLJB(o)) {
            if (t) {
                var i = "";
                n && (i += '<div id="tL4C" style="zIndex:0;position:absolute;border:none;padding:0pt;margin:0pt;background-color:transparent;display:none;">'), i = i + '<a href="javascript:' + tLQC(e) + '" onmouseover="tLeB(event,\'' + tLX(tLiB(tLMC, L)) + "','" + o + '\')" onmousemove="tLXB(event)"onmouseout="tLTC(\'' + o + '\')" ondragstart="return false;"><img src="' + tLX(t) + '" border=0 onmousedown="return tLKB(event,\'' + tLX(tLiB(tLLC, e)) + '\');" oncontextmenu="return tLLB(event);" /></a><!---->', n && (i += "</div>", tL3C()), document.write(i)
            }
            document.write('<div id="' + o + '" name="' + o + '" ' + r + " onmouseover=\"tLoB('" + o + "')\" onmousemove=\"tLpC('" + o + "')\" onmouseout=\"tLpB('" + o + "')\">&nbsp;</div>")
        }
    } else if (tLi() && tLo()) {
        var l = '<iframe src="' + tLX(tLiB(tLMC, L)) + '" id="' + o + 'tLDD" name="' + o + 'tLDD" width="' + tLP + '" height="' + tLQ + '" frameborder="0" allowtransparency="true" style="background:transparent;width:' + tLP + ";height:" + tLQ + '"></iframe>';
        tLJB(o) || document.write('<div id="' + o + '" name="' + o + '" ' + r + " onmouseover=\"tLoB('" + o + "')\" onmousemove=\"tLpC('" + o + "')\" onmouseout=\"tLpB('" + o + "')\">" + l + "</div>"), t && document.write('<a href="javascript:' + tLQC(e) + '" onmouseover="tLeB(event,\'' + tLX(tLiB(tLMC, L)) + "','" + o + '\')" onmousemove="tLXB(event)" onmouseout="tLTC(\'' + o + '\')" ondragstart="return false;"><img src="' + tLX(t) + '" border=0 onmousedown="return tLKB(event,\'' + tLX(tLiB(tLLC, e)) + '\');" oncontextmenu="return tLLB(event);" /></a>')
    } else t && document.write('<a href="javascript:' + tLQC(e) + '" title="Click to verify" onmouseover="if(window.status=\'Click to verify\'){}"><img src="' + tLX(t) + '" border=0 oncontextmenu="return tLLB(event);" title="Click to verify" onmouseover="if(window.status=\'Click to verify\'){}"/></a><!---->')
}

function tLrC(t, e, L, n, o, r, i, l) {
    return o > t + L ? !1 : r > e + n ? !1 : t > o + i ? !1 : e > r + l ? !1 : !0
}

function tLsC(t) {
    return "none" == t.display ? !1 : "hidden" == t.visibility ? !1 : "visible" == t.visibility ? !0 : !0
}

function tLtC(t) {
    if (!tLsC(t.currentStyle)) return !1;
    for (;
        "inherit" == t.currentStyle.visibility;) {
        if (t = t.parentElement, !t) return !0;
        if (!tLsC(t.currentStyle)) return !1
    }
    return !0
}

function tLuC(t, e, L, n, o, r) {
    if (!r && !tLtC(o)) return !1;
    for (var i = o.offsetLeft, l = o.offsetTop, a = o.offsetParent; a; a = a.offsetParent) i += a.clientLeft + a.offsetLeft - a.scrollLeft, l += a.clientTop + a.offsetTop - a.scrollTop;
    return i -= tL_C().clientLeft - tL_C().scrollLeft, l -= tL_C().clientTop - tL_C().scrollTop, tLrC(t, e, L, n, i, l, o.offsetWidth, o.offsetHeight)
}

function tLvC(t, e, L, n, o, r) {
    for (var i = 0; i < o.length; i++)
        if (tLuC(t, e, L, n, o[i], r)) return !0;
    return !1
}

function tLjC() {
    return tLx() && (tL_C().clientWidth < tLP - 10 || tL_C().clientHeight < tLQ - 10 || tLvC(tLOB, tLPB, tLP, tLQ, document.getElementsByTagName("object")) || tLvC(tLOB, tLPB, tLP, tLQ, document.getElementsByTagName("embed")) || tLvC(tLOB, tLPB, tLP, tLQ, document.getElementsByTagName("applet")) || tLvC(tLOB, tLPB, tLP, tLQ, document.getElementsByTagName("select"))) ? !0 : !1
}

function tLz() {
    return tLi() && !tLv() ? !0 : !1
}

function tLHB() {
    if (tLGB) return tLGB;
    var t = "UNSUPPORTED:tL_B::",
        e = t,
        L = t,
        n = "MSIE5:tLtB:tLvB:tLyB:tLwB:tL3B:tL7B:tL5B:tLAC:tLBC::",
        o = "MSIE5_5:tLtB:tLvB:tLyB:tLxB:tLwB:tL3B:tL7B:tL5B:tLAC:tLBC:tLCC:tLDC::",
        r = o,
        i = r,
        l = "MACIE5_1:tLtB:tLvB:tLyB:tLzB:tLwB:tL3B:tL7B:tL5B:tLAC:tLBC::",
        a = t,
        s = "OPERA6:tLvB:tL4B:tLxB:tLwB:tLyB:tL3B:tL7B:tL6B:tLsB::",
        u = t,
        B = "NS6:tLvB:tLwB:tLyB:tL2B:tL8B:tL6B::",
        c = t,
        f = "UP:tLtB:tLyB:tLwB:tL7B::",
        C = "UPUP:tLtB:tLvB:tLyB:tLxB:tLwB:tL3B:tL7B:tL5B:tLAC:tLBC:tLCC:tLDC::",
        p = navigator.userAgent,
        d = navigator.appVersion;
    tLGB = t;
    var m = 0;
    if (document.getElementById)
        if (tLGB = C, m = p.indexOf("Opera "), -1 != m) {
            var v = parseFloat(p.substring(m + 6, m + 10));
            tLGB = 5 > v ? c : 5.999 >= v ? a : 7 > v ? s : C
        } else if ("Microsoft Internet Explorer" == navigator.appName) {
        m = d.indexOf("MSIE ");
        var v = parseFloat(d.substring(m + 5, m + 9));
        "MacPPC" == navigator.platform || "Mac68K" == navigator.platform ? tLGB = l : (tLGB = C, tLGB = 3.5 >= v ? e : 4.5 >= v ? L : 5.49 > v ? n : 6 > v ? o : 6.5 > v ? r : i)
    } else if ("Netscape" == navigator.appName) {
        var v = parseFloat(d);
        tLGB = 4.7 > v ? t : 4.8 > v ? u : B
    } else tLGB = C;
    else if (document.all)
        if ("Microsoft Internet Explorer" == navigator.appName) {
            m = d.indexOf("MSIE ");
            var v = parseFloat(d.substring(m + 5, m + 9));
            "MacPPC" == navigator.platform || "Mac68K" == navigator.platform ? tLGB = l : (tLGB = C, tLGB = 3.5 >= v ? e : 4.5 >= v ? L : 5.49 > v ? n : 6 > v ? o : 6.5 > v ? r : i)
        } else tLGB = f;
    else if (document.layers)
        if ("Netscape" == navigator.appName) {
            var v = parseFloat(d);
            tLGB = 4.7 > v ? c : 4.8 > v ? u : B
        } else tLGB = c;
    else tLGB = t;
    return tLGB
}

function tLIB(t) {
    var e = tLHB();
    return t = ":" + t + ":", -1 == e.indexOf(t) ? !1 : !0
}

function tLd() {
    return tLIB("tLtB")
}

function tLe() {
    return tLIB("tLuB")
}

function tLf() {
    return tLIB("tLvB")
}

function tLh() {
    return tLIB("tLxB")
}

function tLi() {
    return tLIB("tLyB")
}

function tLj() {
    return tLIB("tLzB")
}

function tLl() {
    return tLIB("tL1B")
}

function tLm() {
    return tLIB("tL2B")
}

function tLn() {
    return tLIB("tL3B")
}

function tLo() {
    return tLIB("tL4B")
}

function tLp() {
    return tLIB("tL5B")
}

function tLq() {
    return tLIB("tL6B")
}

function tLr() {
    return tLIB("tL7B")
}

function tLs() {
    return tLIB("tL8B")
}

function tLt() {
    return tLIB("tLAC")
}

function tLu() {
    return tLIB("tLsB")
}

function tLx() {
    return tLIB("tLCC")
}

function tLv() {
    return tLIB("tL_B")
}

function tLw() {
    return tLIB("tLBC")
}

function tLy() {
    return tLIB("tLDC")
}

function tLJB(t) {
    return tLf() ? document.getElementById(t) : tLd() ? document.all[t] : tLe() ? document.layers[t] : null
}

function tLHC(t) {
    window.clearTimeout(t)
}

function tLIC(t, e) {
    return window.setTimeout(t, e)
}

function tLKB(t, e) {
    return tLz() ? 2 & t.button ? (alert("This TrustLogo is protected"), tLp() ? (t.cancelBubble = !0, t.returnValue = !1) : tLq() && (t.preventDefault(), t.cancelPropagation()), !1) : 1 & t.button ? !0 : void 0 : !0
}

function tLLB(t) {
    return tLz() ? (tLp() ? (t.cancelBubble = !0, t.returnValue = !1) : tLq() && (t.preventDefault(), t.cancelPropagation()), !1) : void 0
}

function tLMB() {
    tLz() && (tLQB = 0, tLnB(tLNB, tLOB, tLPB, tLTB))
}

function tL_C() {
    return "CSS1Compat" == document.compatMode ? document.body.parentElement : document.body
}

function tLXB(t) {
    if (tLz() && !tLWB) {
        var e, L, n = 0,
            o = 0,
            r = 800,
            i = 600;
        return tLn() ? (n = tL_C().scrollLeft, o = tL_C().scrollTop, r = tL_C().clientWidth, i = tL_C().clientHeight, e = t.clientX + n, L = t.clientY + o) : tLm() && (e = t.pageX, L = t.pageY, n = window.pageXOffset, o = window.pageYOffset, r = window.innerWidth, i = window.innerHeight), tLOB = n + r >= e + tLP ? e + tLU : e - tLP >= n ? e - tLP - tLU : n + r / 2 - tLP / 2, tLPB = o + i >= L + tLQ ? L + tLV : L - tLQ >= o ? L - tLQ - tLV : o + i / 2 - tLQ / 2, !0
    }
}

function tLeB(t, e, L) {
    if (tLz()) {
        ("CL1" == current_code || "SC5" == current_code || "SC4" == current_code) && (tLP = 356, tLQ = 259);
        var n = 'src="' + tLX(e) + '" id="' + L + 'tLDD" name="' + L + 'tLDD" width="' + tLP + '" height="' + tLQ + '"',
            o = 'src="' + tLlC + tLX(tLY(e)) + '" id="' + L + 'tLDD" name="' + L + 'tLDD" width="' + tLP + '" height="' + tLQ + '"',
            r = "<iframe " + n + ' frameborder="0" allowtransparency="true" style="background:transparent;overflow:hidden;"></iframe>',
            i = "<iframe " + o + ' frameborder="0" allowtransparency="true" style="background:transparent;overflow:hidden;" ondeactivate="tLIC(\'tLlB(\\\'' + L + "\\');',1);\"></iframe>";
        if (tLjC()) tLNB = i;
        else {
            if (!tLi()) return;
            tLNB = r
        }
        if (tLTB && L != tLTB && (tLlB(tLTB), tLlB(L), tLmB()), !tLUB) {
            var l;
            if (tLi() && (l = tLJB(L), "visible" == l.style.visibility)) {
                if (tLNB == tLWB) return void(tLRB && (tLHC(tLRB), tLRB = 0));
                tLRB && (tLHC(tLRB), tLRB = 0), tLlB(L), tLWB = tLNB
            }
            tLXB(t), tLTB = L, tLQB || (tLQB = tLIC("tLMB()", tLR), tLRB && (tLHC(tLRB), tLRB = 0))
        }
    }
}

function tLnB(t, e, L, n) {
    if (tLz() && (t != tLWB && (tLRB && (tLHC(tLRB), tLRB = 0), tLlB(n)), tLWB = t, tLz())) {
        var o;
        if (tLi()) {
            if (o = tLJB(n), o.style.visibility = "visible", o && o.offsetParent) {
                var r = new Array(-e, -L);
                tL9C(o.offsetParent, r), e = -r[0], L = -r[1]
            }
            if (tLr() ? (o.style.pixelLeft = e, tLj() || (o.style.pixelTop = L), o.style.pixelWidth = tLP, o.style.pixelHeight = tLQ) : (o.style.left = e + "px", tLj() || (o.style.top = L + "px"), o.style.width = tLP + "px", o.style.height = tLQ + "px"), o.style.borderWidth = "0px", tLo() || (o.innerHTML = t), tLjC()) {
                tLJB(n + "tLDD")
            }
            o.style.zIndex = 0, o.style.visibility = "visible"
        }
    }
}

function tLqC() {
    return !tLh() || tLjC()
}

function tLTC(t) {
    tLz() && (tLQB && (tLHC(tLQB), tLQB = 0), tLqC() ? tLRB || (tLRB = tLIC('tLlB("' + t + '")', tLT)) : tLRB || (tLRB = tLIC('tLlB("' + t + '")', tLS)))
}

function tLpC(t) {
    tLz() && (tLRB && (tLHC(tLRB), tLRB = 0), tLqC() && 0 == tLRB && (tLRB = tLIC('tLlB("' + t + '")', tLT)))
}

function tLoB(t) {
    tLz() && (tLRB && (tLHC(tLRB), tLRB = 0), tLqC() && 0 == tLRB && (tLRB = tLIC('tLlB("' + t + '")', tLT)))
}

function tLpB(t) {
    tLz() && (tLqC() ? tLRB || (tLRB = tLIC('tLlB("' + t + '")', tLT)) : tLRB || (tLRB = tLIC('tLlB("' + t + '")', tLS)))
}

function tLlB(t) {
    if (tLz()) {
        tLRB && (tLRB = 0), tLQB && tLTB == t && (tLHC(tLQB), tLQB = 0), tLWB = "";
        var e;
        tLi() && (e = tLJB(t)), tLz() && (null == e || (tLi() ? (e.style.visibility = "hidden", e.innerHTML = "") : e.visibility = "hide"), tLVB || (tLUB = !0, tLVB = tLIC("tLmB()", tLW)))
    }
}

function tLmB() {
    tLVB && (tLVB = 0, tLUB = !1)
}

function createStyleRule(t, e) {
    if (document.getElementsByTagName && (document.createElement || document.createElementNS)) {
        var L = navigator.userAgent.toLowerCase(),
            n = -1 != L.indexOf("msie") && -1 == L.indexOf("opera"),
            o = n && -1 != L.indexOf("win"),
            r = n && -1 != L.indexOf("mac");
        if (!r) {
            var i = document.getElementsByTagName("head")[0],
                l = "undefined" != typeof document.createElementNS ? document.createElementNS("http://www.w3.org/1999/xhtml", "style") : document.createElement("style");
            if (!o) {
                var a = document.createTextNode(t + " {" + e + "}");
                l.appendChild(a)
            }
            if (l.setAttribute("type", "text/css"), l.setAttribute("media", "screen"), i.appendChild(l), o && document.styleSheets && document.styleSheets.length > 0) {
                var s = document.styleSheets[document.styleSheets.length - 1];
                "object" == typeof s.addRule && s.addRule(t, e)
            }
        }
    }
}
var current_code = "",
    tLB = "SCAS",
    tLC = "SCAS",
    tLD = "SC",
    tLE = "SC",
    tLF = "SCOP",
    tLG = "SCOP",
    tLH = "SCCC",
    tLI = "SCCC",
    tLnC = "http://www.trustlogo.com/";
"https:" == window.location.protocol.toLowerCase() && (tLnC = "https://secure.trust-provider.com/");
var tLbC = tLnC + "trustlogo/images/popup/",
    tLlC = tLnC + "trustlogo/javascript/tl_tl_popupParent.htm#",
    tLyC = tLnC + "trustlogo/logos/",
    tLMC = tLnC + "ttb_searcher/trustlogo?",
    tLLC = tLMC + "v_querytype=W&";
tLMC += "v_querytype=C&";
var tLNC = "&x=6&y=5",
    tLgC = 120,
    tLeC = 374,
    tLhC = 660;
if (window.attachEvent) var tLhC = 660,
    tLeC = 394;
var tLP = 360,
    tLQ = 300,
    tLfC = 60,
    tLiC = 160;
tLu() && (tLP += 20);
var tLU = 3,
    tLV = 3,
    tLzC = "",
    tLR = 500,
    tLS = 500,
    tLT = 2e3,
    tLW = 100,
    tLO = new Array;
tLw() && (screen.availHeight - tLgC < tLhC + tLiC && (tLhC = screen.availHeight - tLiC, tLgC = 0), screen.availWidth - tLfC < tLeC && (tLeC = screen.availWidth, tLfC = 0));
var tLYC = "toolbar=0,scrollbars=1,location=1,status=1,menubar=1,resizable=1,width=" + tLeC + ",height=" + tLhC + ",left=" + tLfC + ",top=" + tLgC,
    tLGB, tLNB = "",
    tLOB = 0,
    tLPB = 0,
    tLQB = 0,
    tLRB = 0,
    tLSB = null,
    tLTB = "",
    tLUB = !1,
    tLVB = 0,
    tLWB = "";
version = 0, -1 != navigator.appVersion.indexOf("MSIE") && (temp = navigator.appVersion.split("MSIE"), version = parseFloat(temp[1])), version >= 5.5 && window.createPopup && (!document.documentElement || "undefined" == typeof document.documentElement.style.maxHeight) ? document.writeln('<style type="text/css">#comodoTL{display:none;font-size:8px;padding-left:18px;}</style>') : "9" == version ? document.writeln('<style type="text/css">#comodoTL{display:block;font-size:8px;padding-left:18px;}</style>') : createStyleRule("#comodoTL", "display:block;font-size:8px;padding-left:18px;");