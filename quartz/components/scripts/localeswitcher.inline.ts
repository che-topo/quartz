document.addEventListener("DOMContentLoaded", function() {
  // Determine the browser language, supports all browsers:
  // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language#browser_compatibility
  var userLanguage = navigator.language;
  
  // Set default language: Spanish if the user's language starts with "es", else English
  var defaultLanguage = userLanguage.startsWith("es") ? "es" : "en";
  document.documentElement.lang = defaultLanguage;

  // Add click event to toggle the locale attribute on the <html> element
  var btn = document.getElementById("localeSwitcher");
  btn!.addEventListener("click", function() {
    var currentLanguage = document.documentElement.lang;
    document.documentElement.lang = (currentLanguage === "es") ? "en" : "es";
  });
});