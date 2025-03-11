document.addEventListener("DOMContentLoaded", function() {
  // Determine the user's system language
  var userLang = navigator.language || navigator.userLanguage;
  
  // Set default locale: Spanish if the user's language starts with "es", else English
  var defaultLocale = userLang.startsWith("es") ? "es" : "en";
  document.documentElement.lang = defaultLocale;

  // Add click event to toggle the locale attribute on the <html> element
  var btn = document.getElementById("localeSwitcher");
  btn.addEventListener("click", function() {
    var currentLocale = document.documentElement.lang;
    document.documentElement.lang = (currentLocale === "es") ? "en" : "es";
  });
});