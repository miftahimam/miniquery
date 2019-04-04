const SweetSelector = (function() {
    return {
      select: function(selector) {
        return document.querySelector(selector);
      }
    };
  })();
  
  const DOM = (function() {
    return {
      hide: function(selector) {
        return (SweetSelector.select(selector).style.display = "none");
      },
      show: function(selector) {
        return (SweetSelector.select(selector).style.display = "block");
      },
      addClass: function(selector, className) {
        let els = SweetSelector.select(selector);
        return els.classList.add(newClass);
      },
      removeClass: function(selector, className) {
        let els = SweetSelector.select(selector);
        return els.classList.remove(newClass);
      }
    };
  })();
  
  const EventDispatcher = (function() {
    return {
      on: function(selector, diklik = "click", fn) {
        let link = document.querySelector(selector);
        link.forEach(val => {
          val.onclick = fn;
        });
      },
      trigger: function(query, nameEvent) {
        let events = document.createEvent("Event");
        events.initEvent(nameEvent, true, true);
        let element = document.querySelector(query);
        element.dispatchEvent(events);
      }
    };
  })();
  
  const AjaxWrapper = (function() {
    return {
      request: function(req) {
        httpRequest = new XMLHttpRequest();
        httpRequest.open(req.type, req.url);
        let send = httpRequest.send();
        req.success = send;
        req.failed = httpRequest.onerror;
      }
    };
  })();