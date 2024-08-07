/* global $ */

//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//


$(document).ready(function () {
})

/* global $ */


$(document).ready(function () {
  window.MOJFrontend.initAll()
  
})
//post code lookup jquery
$(document).ready(
  !function (e) {
    "use strict"; function t(t) {
    this.config = {}, e.extend(this, r), t && e.extend(this, t); var o = {};
      for (var s in this.output_fields) void 0 !== this.output_fields[s] && (o[s] = e(this.output_fields[s]));
      this.$output_fields = o
    } var o = [], s = {}, r = {
      api_key: "", output_fields: {
        line_1: "#line_1",
        line_2: "#line_2",
        line_3: "#line_3",
        post_town: "#post_town",
        postcode: "#postcode"
      },
      endpoint: "https://api.ideal-postcodes.co.uk/v1",
      input_label: "",
      placeholder_label: "",
      input_muted_style: "color:#CBCBCB;",
      input_class: "",
      input_id: "idpc_input",
      button_id: "idpc_button",
      button_label: "Find my Address",
      button_class: "",
      button_disabled_message: "Looking up postcode...",
      dropdown_id: "idpc_dropdown",
      dropdown_select_message: "Please select your address",
      dropdown_class: "",
      error_message_id: "idpc_error_message",
      error_message_invalid_postcode: "Please check your postcode, it seems to be incorrect",
      error_message_not_found: 'Please enter your postcode',
      error_message_address_not_found: 'We could not find a match for your address.',
      error_message_default: 'Please enter your postcode',
      error_message_class: "",
      address_search: !1,
      last_lookup: "",
      disable_interval: 1e3,
      debug_mode: !1,
      check_key: !1,
      remove_organisation: !1,
      licensee: null,
      address_formatters: {
        postcode_search: function (e) {
          var t = [e.line_1]; return "" !== e.line_2 && t.push(e.line_2),
            t.join(" ")
        },
        address_search: function (e) {
          var t = [e.line_1];
          return "" !== e.line_2 && t.push(e.line_2),
            t.push(e.post_town),
            t.push(e.postcode_outward),
            t.join(", ")
        }
      }
    },
      n = function (e) { return 0 !== e.organisation_name.length && e.line_1 === e.organisation_name && (e.line_1 = e.line_2, e.line_2 = e.line_3, e.line_3 = ""), e };
    t.prototype.setupPostcodeInput = function (e) {
      this.$context = e,
        this.setupInputField(),
        this.setupLookupButton()
    },
      t.prototype.setupInputField = function () {
        var t = this; return e(this.input).length ? this.$input = e(this.input).first() : this.$input = e("<input />", {
          type: "text",
          id: this.input_id,
          value: this.input_label, placeholder: this.placeholder_label
        }).appendTo(this.$context).addClass(this.input_class).val(this.input_label).attr("style", this.input_muted_style).submit(function () {
          return !1
        }).keypress(function (e) {
          13 === e.which && t.$button.trigger("click")
        }).focus(function () {
          t.$input.removeAttr("style").val("")
        }).blur(function () {
          t.$input.val() || (t.$input.val(t.input_label), t.$input.attr("style", t.input_muted_style))
        }),
          this.$input
      }, t.prototype.setupLookupButton = function () {
        var t = this; return e(t.button).length ? t.$button = e(t.button).first() : t.$button = e("<button />", {
          html: t.button_label, id: t.button_id, type: "button"
        }
        ).appendTo(t.$context).addClass(t.button_class).attr("onclick", "return false;").submit(function () { return !1 }), t.$button.click(function () {
        t.onLookupTriggered && t.onLookupTriggered.call(t);
          var e = function () {
            var e = t.$input.val();
            t.last_lookup !== e && (t.last_lookup = e, t.clearAll(),
              t.disableLookup(), t.executeSearch(e))
          };
          return t.shouldLookupTrigger ? t.shouldLookupTrigger.call(t, e) : e(), !1
        }), t.$button
      },
      t.prototype.disableLookup = function (e) {
        this.button || (e = e || this.button_disabled_message, this.$button.prop("disabled", !0).html(e))
      },
      t.prototype.enableLookup = function () {
        if (!this.button) {
          var e = this; 0 === e.disable_interval ? e.$button.prop("disabled", !1).html(e.button_label) : setTimeout(function () {
            e.$button.prop("disabled", !1).html(e.button_label)
          }, e.disable_interval)
        }
      },
      t.prototype.clearAll = function () { this.setDropDown(), this.setErrorMessage() }
      , t.prototype.removeAll = function () {
        this.$context = null, e.each([this.$input, this.$button, this.$dropdown, this.$error_message],
          function (e, t) { t && t.remove() })
      },
      t.prototype.executeSearch = function (e) {
        var t, o = this, s = function (s, r, n) {
          o.enableLookup(), o.cacheSearchResults(n),
          s ? (t = o.debug_mode ? s.message : o.error_message_default, o.setErrorMessage(t),
            o.onSearchError && o.onSearchError.call(o, s)) : r.length > 0 ? (o.last_lookup = e, o.onAddressesRetrieved && o.onAddressesRetrieved.call(o, r), o.setDropDown(r)) : (t = o.address_search ? o.error_message_address_not_found : o.error_message_not_found, o.setErrorMessage(t)), o.onSearchCompleted && o.onSearchCompleted.call(o, n)
        };
        return o.address_search ? o.executeAddressSearch(e, s) : o.executePostcodeSearch(e, s)
      },
      t.prototype.executePostcodeSearch = function (t, o) {
        var s = this, r = { query: t, api_key: s.api_key, endpoint: s.endpoint };
        s.tags && (r.tags = s.tags), s.licensee && (r.licensee = s.licensee), e.idealPostcodes.lookupPostcode(r, o)
      },
      t.prototype.executeAddressSearch = function (t, o) {
        var s = this, r = { query: t, api_key: s.api_key, endpoint: s.endpoint };
        "object" == typeof s.address_search && (r.limit = s.address_search.limit || 10),
          s.tags && (r.tags = s.tags), s.licensee && (r.licensee = s.licensee), e.idealPostcodes.lookupAddress(r, o)
      },
      t.prototype.cacheSearchResults = function (e) { return null === e ? null : (this.response_code = e.code, this.response_message = e.message, this.result = e.result, e) },
      t.prototype.setDropDown = function (t) {
        var o = this, s = o.address_formatters.postcode_search; if (o.address_search && (s = o.address_formatters.address_search),
          this.$dropdown && this.$dropdown.length && (this.$dropdown.remove(),
            delete this.$dropdown, this.onDropdownDestroyed && this.onDropdownDestroyed.call(this)), t) {
          var r = e("<select />", { id: o.dropdown_id }).addClass(o.dropdown_class); e("<option />",
            { value: "ideal", text: o.dropdown_select_message }).appendTo(r); for (var i = t.length, a = 0; a < i; a += 1)e("<option />", { value: a, text: s(t[a]) }).appendTo(r);
          var l; return l = e(this.dropdown_container).length ? e(this.dropdown_container).first() : this.$context, r.appendTo(l).change(function () {
            var s, r = e(this).val(); r >= 0 && (s = o.remove_organisation ? n(t[r]) : t[r], o.setAddressFields(s), o.onAddressSelected && o.onAddressSelected.call(o, s))
          })
            , o.onDropdownCreated && o.onDropdownCreated.call(o, r), o.$dropdown = r, r
        }
      },
      t.prototype.setErrorMessage = function (t) {
        if (this.$error_message && this.$error_message.length && (this.$error_message.remove(),
          delete this.$error_message), t) {
          var o; return o = e(this.error_message_container).length ? e(this.error_message_container).first() : this.$context, this.$error_message = e("<p />", { html: t, id: this.error_message_id }).addClass(this.error_message_class).appendTo(o), this.$error_message
        }
      },
      t.prototype.setAddressFields = function (e) { e = e || {}; for (var t in this.$output_fields) this.$output_fields[t].val(e[t] || "") };
    var i = function (e) { return e.code + " - " + e.message };
    e.idealPostcodes = {
      defaults: function () { return r }, keyCheckCache: s, lookupPostcode: function (t, o) {
        var s, n = t.query || t.postcode || "", a = t.api_key || "", l = [t.endpoint || r.endpoint, "postcodes", encodeURI(n)].join("/"), d = { api_key: a };
        s = t.error ? t.error : function (e, t) { return o(new Error("Request Failed: " + t), [], null, e) },
          t.tags && e.isArray(t.tags) && (d.tags = t.tags.join(",")), t.licensee && (d.licensee = t.licensee);
        var u = {
          url: l, data: d, dataType: "jsonp", timeout: 1e4, success: function (e, t, s) {
            return 2e3 === e.code ? o(null, e.result, e, s) : 4040 === e.code ? o(null, [], e, s) : o(new Error(i(e)), [], e, s)
          }, error: s
        }; e.ajax(u)
      },
      lookupAddress: function (t, o) {
        var s, n = t.query || "", a = t.api_key || "", l = [t.endpoint || r.endpoint, "addresses"].join("/"), d = { api_key: a, query: n };
        s = t.error ? t.error : function (e, t) {
          return o(new Error("Request Failed: " + t),
            [], null, e)
        }, d.limit = t.limit || 10, t.tags && e.isArray(t.tags) && (d.tags = t.tags.join(",")), t.licensee && (d.licensee = t.licensee);
        var u = {
          url: l, data: d, dataType: "jsonp", timeout: 1e4, success: function (e, t, s) {
            return 2e3 === e.code ? o(null, e.result.hits, e, s) : o(new Error(i(e)), [], e, s)
          }, error: s
        };
        e.ajax(u)
      }, checkKey: function (t, o, n) {
        var i = t.api_key || ""; n = n || function () { };
        var a = s[i]; if ("boolean" == typeof a) return a ? o() : n(); if ("object" == typeof a) return s[i].success.push(o), void s[i].error.push(n);
        s[i] = { success: [o], error: [n] }; var l = { url: [t.endpoint || r.endpoint, "keys", i].join("/"), dataType: "jsonp", timeout: 1e4 };
        t.licensee && (l.data = { licensee: t.licensee }), l.success = function (t) {
          if (t && t.result && t.result.available) {
            var o = s[i].success; s[i] = !0,
              e.each(o, function (e, o) { o.call(null, t) })
          } else { var r = s[i].error; s[i] = !1, e.each(r, function (e, t) { t.call() }) }
        },
          l.error = function () { var t = s[i].error; delete s[i], e.each(t, function (e, t) { t.call() }) }, e.ajax(l)
      }, clearAll: function () {
        for (var e = o.length, t = 0; t < e; t += 1)o[t].removeAll()
      }
    }, e.fn.setupPostcodeLookup = function (s) {
      var r = this; if (0 === r.length) return r; var n = function () {
        e.each(r, function (r, n) { var i = new t(s); o.push(i), i.setupPostcodeInput(e(n)) }), e.isFunction(s.onLoaded) && s.onLoaded.call(r)
      }; if (s.check_key) {
        var i = { api_key: s.api_key }; s.endpoint && (i.endpoint = s.endpoint), s.licensee && (i.licensee = s.licensee), e.idealPostcodes.checkKey(i, n, function () {
          e.isFunction(s.onFailedCheck) && s.onFailedCheck.call(r)
        })
      } else n(); return r
    }
  }(jQuery));


// change text and url find address button

$('#customButton').click(function () {
  var $this = $(this);
  $this.toggleClass('customButton');
  if ($this.hasClass('#customButton')) {
    $this.text('Find address');
  } else {
    $this.text('Continue');

    $("#customButton").click(function () {
      var text = $("#customButton").val();
      var comparingText = "";
      if (text === comparingText) {
        window.location.href = 'applicants_contact_details.html'
      }
    });
  }
});

//SHOW AND HIDE MUTIPLE JOURNEY TESTING FROM SAME PAGE
$(document).ready(function () {
  $('#button').click(function (e) {
    e.preventDefault(); // stops link from making page jump to the top
    e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
    $('#content').toggle();
  });
  $('#content').click(function (e) {
    e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too  
  });
  $('body').click(function () {
    $('#content').hide();
  });
});

// change text and url find address button
$('#customButton_proto_1_3').click(function () {
  var $this = $(this);
  $this.toggleClass('customButton_proto_1_3');
  if ($this.hasClass('#customButton_proto_1_3')) {
    $this.text('Find address');
  } else {
    $this.text('Continue');

    $("#customButton_proto_1_3").click(function () {
      var text = $("#customButton_proto_1_3").val();
      var comparingText = "";
      var idpcValue = $("#idpc_input").val();
      if (text === comparingText && (idpcValue.indexOf('BT') == 0)) {

        window.location.href = '../exemption_pages/exemption_applicant_northern_ireland.html'
      } else if (text === comparingText && (idpcValue.indexOf('bt') == 0)) {
        window.location.href = '../exemption_pages/exemption_applicant_northern_ireland.html'

      } else {
        window.location.href = 'applicants_contact_details.html'
      }
    });
  }
});



// change text and url find address button
$('#customButton_proto_print_1').click(function () {
  var $this = $(this);
  $this.toggleClass('customButton_proto_print_1');
  if ($this.hasClass('#customButton_proto_print_1')) {
    $this.text('Find address');
  } else {
    $this.text('Continue');

    $("#customButton_proto_print_1").click(function () {
      var text = $("#customButton_proto_print_1").val();
      var comparingText = "";
      var idpcValue = $("#idpc_input").val();
      if (text === comparingText && (idpcValue.indexOf('BT') == 0)) {

        window.location.href = '../exemption_pages/exemption_applicant_northern_ireland.html'
      } else if (text === comparingText && (idpcValue.indexOf('bt') == 0)) {
        window.location.href = '../exemption_pages/exemption_applicant_northern_ireland.html'

      } else if (text === comparingText && (idpcValue.indexOf('GIR 0AA') == 0)) {

        window.location.href = '../dropouts/dropout_not_know_postcode.html'
      } else if (text === comparingText && (idpcValue.indexOf('gir 0aa') == 0)) {
        window.location.href = '../dropouts/dropout_not_know_postcode.html'

      } else {
        window.location.href = '/cmg-app/sprint_1/sprint_1_main_prototype/about_applicant/applicants_contact_files/applicants_contact_details'
      }
    });
  }
});


// change text and url find address button
$('#customButton_sprint_2').click(function () {
  var $this = $(this);
  $this.toggleClass('customButton_sprint_2');
  if ($this.hasClass('#customButton_sprint_2')) {
    $this.text('Find address');
  } else {
    $this.text('Continue');

    $("#customButton_sprint_2").click(function () {
      var text = $("#customButton_sprint_2").val();
      var comparingText = "";
      var idpcValue = $("#idpc_input").val();
      if (text === comparingText && (idpcValue.indexOf('BT') == 0)) {

        window.location.href = '../exemption_pages/exemption_applicant_northern_ireland.html'
      } else if (text === comparingText && (idpcValue.indexOf('bt') == 0)) {
        window.location.href = '../exemption_pages/exemption_applicant_northern_ireland.html'

      } else {
        window.location.href = '/cmg-app/sprint_2/sprint_2_main_prototype/about_applicant/applicants_contact_files/applicants_contact_details'
      }
    });
  }
});


$('#customButton_correspondence').click(function () {
  var $this = $(this);
  $this.toggleClass('customButton_correspondence');
  if ($this.hasClass('#customButton_correspondence')) {
    $this.text('Find address');
  } else {
    $this.text('Continue');

    $("#customButton_correspondence").click(function () {
      var text = $("#customButton_correspondence").val();
      var comparingText = "";
      if (text === comparingText) {
        window.location.href = 'applicants_correspondence_query.html'
      }
    });
  }
});


$('#customButton_correspondence_post').click(function () {
  var $this = $(this);
  $this.toggleClass('customButton_correspondence_post');
  if ($this.hasClass('#customButton_correspondence_post')) {
    $this.text('Find address');
  } else {
    $this.text('Continue');

    $("#customButton_correspondence_post").click(function () {
      var text = $("#customButton_correspondence_post").val();
      var comparingText = "";
      if (text === comparingText) {
        window.location.href = 'applicants_contact_files/applicants_contact_details.html'
      }
    });
  }
});


$('#customButton_court_order_sprint_2').click(function () {
  var $this = $(this);
  $this.toggleClass('customButton_court_order_sprint_2');
  if ($this.hasClass('#customButton_court_order_sprint_2')) {
    $this.text('Find address');
  } else {
    $this.text('Continue');

    $("#customButton_court_order_sprint_2").click(function () {
      var text = $("#customButton_court_order_sprint_2").val();
      var comparingText = "";
      if (text === comparingText) {
        window.location.href = '../tasklists/tasklist_2.html'
      }
    });
  }
});



$('#customButton_sprint_3').click(function () {
  var $this = $(this);
  $this.toggleClass('customButton_sprint_3');
  if ($this.hasClass('#customButton_sprint_3')) {
    $this.text('Find address');
  } else {
    $this.text('Continue');

    $("#customButton_sprint_3").click(function () {
      var text = $("#customButton_sprint_3").val();
      var comparingText = "";
      if (text === comparingText) {
        window.location.href = '/cmg-app/sprint_2/sprint_2_main_prototype/about_applicant/applicants_contact_files/applicants_contact_details.html'
      }
    });
  }
});



$('#customButton_sprint_4').click(function () {
  var $this = $(this);
  $this.toggleClass('customButton_sprint_4');
  if ($this.hasClass('#customButton_sprint_4')) {
    $this.text('Find address');
  } else {
    $this.text('Continue');

    $("#customButton_sprint_4").click(function () {
      var text = $("#customButton_sprint_4").val();
      var comparingText = "";
      if (text === comparingText) {
        window.location.href = 'applicants_contact_details'
      }
    });
  }
});

/* eslint-disable */
function showPassword(event) {
  event.preventDefault();
  const passwordInput = document.getElementById(this.dataset.elementid);
  if (this.dataset.state === 'show') {
    this.innerHTML = this.innerHTML.replace('Show', 'Hide');
    this.dataset.state = 'hide';
    passwordInput.type = 'text';
  } else {
    this.innerHTML = this.innerHTML.replace('Hide', 'Show');
    this.dataset.state = 'show';
    passwordInput.type = 'password';
  }
}
function nodeListForEach(nodes, callback) {
  if (window.NodeList.prototype.forEach) {
    return nodes.forEach(callback);
  }
}
const $passwordInput = document.querySelectorAll('.cmg-password-input');
nodeListForEach($passwordInput, function ($input) {
  $input.classList.add('cmg-password-input--js-enabled');
  const button = document.createElement('button')
  button.className = 'govuk-button govuk-button--secondary cmg-password-button';
  button.innerHTML = 'Show <span class="govuk-visually-hidden"> ' + $input.dataset.buttonDescription + '</span>';
  button.dataset.state = 'show';
  button.dataset.elementid = $input.id;
  $input.insertAdjacentElement('afterend', button);
  button.addEventListener('click', showPassword);
});







