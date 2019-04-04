class SweetSelector {
    select(name) {
      return document.querySelector(name);
    }
  }
  
  class DOM {
    static hide(name) {
      return (document.querySelector(name).style.display = "none");
    }
  
    static show(name) {
      return (document.querySelector(name).style.display = "block");
    }
  
    static addClass(selector, className) {
      let els = document.querySelectorAll(selector);
      els.forEach(kelas => {
        kelas.className += className;
      });
    }
  
    static removeClass(selector, className) {
      let els = document.querySelectorAll(selector);
      els.forEach(kelas => {
        kelas.classList.remove(className);
      });
    }
  }
  
  class EventDispatcher {
    static on(selector, diklik = "click", fn) {
      let link = document.querySelector(selector);
      link.forEach(val => {
        val.onclick = fn;
      });
    }
  
    static trigger(query, nameEvent) {
      let events = document.createEvent("Event");
      events.initEvent(nameEvent, true, true);
      let element = document.querySelector(query);
      element.dispatchEvent(events);
    }
  }
  
  class AjaxWrapper {
    static request(req) {
      httpRequest = new XMLHttpRequest();
      httpRequest.open(req.type, req.url);
      let send = httpRequest.send();
      req.success = send;
      req.failed = httpRequest.onerror;
    }
  }
  
  const getId = SweetSelector.select("#id");
  const getClass = SweetSelector.select(".kelas");
  const a_only = SweetSelector.select("a");
  
  console.log(getId);
  console.log(getClass);
  console.log(a_only);
  