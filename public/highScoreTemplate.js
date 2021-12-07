(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['highScore'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<p id=\"highscores-p\">\r\n    <span class=\"username\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"username") || (depth0 != null ? lookupProperty(depth0,"username") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data,"loc":{"start":{"line":2,"column":28},"end":{"line":2,"column":40}}}) : helper)))
    + ":</span>\r\n    <span class=\"wpm\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"wpm") || (depth0 != null ? lookupProperty(depth0,"wpm") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wpm","hash":{},"data":data,"loc":{"start":{"line":3,"column":23},"end":{"line":3,"column":30}}}) : helper)))
    + " </span>\r\n</p>";
},"useData":true});
})();