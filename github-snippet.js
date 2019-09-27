/*var deployUrl = "https://westegg.site/?repoUrl=";*/
var deployUrl = "https://westegg.site/?repoUrl=";
var suffix = ".git";

if (window.location.hostname.indexOf("github.com") !== -1) {
  var img = document.querySelectorAll('img[alt="Deploy to Netlify"')[0];
  if (img) {
    img.src =
      "https://github.com/samstav/westegg/raw/master/button_deploy-to-digitalocean.png";
    img.alt = "Deploy to DigitalOcean";
    img.parentElement.href = `${deployUrl}${window.location.href}${suffix}`;
  }
}

if (window.location.hostname.indexOf("gatsbyjs.org") !== -1) {
  var headings = document.evaluate(
    "//span[contains(text(), 'Netlify')]",
    document,
    null,
    XPathResult.ANY_TYPE,
    null
  );

  if (headings) {
    var span = headings.iterateNext();
    if (span) {
      span.innerText = "DigitalOcean";
      var params = new URLSearchParams(span.parentElement.search);
      var url = params.get("repository");
      span.parentElement.href = `${url}${suffix}`; /* `${deployUrl}${url}${suffix}`;*/
      console.log(span.parentElement.href);
    }
  }
}
