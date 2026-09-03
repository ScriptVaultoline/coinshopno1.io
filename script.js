const copyButtons = document.querySelectorAll(".copyButton");

copyButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    const script = button.getAttribute("data-script");

    if (!script) {
      button.textContent = "NO SCRIPT";
      return;
    }

    // 최신 복사 방식
    if (navigator.clipboard) {

      navigator.clipboard.writeText(script)
        .then(function() {
          showCopied(button);
        })
        .catch(function() {
          fallbackCopy(script, button);
        });

    } else {

      fallbackCopy(script, button);

    }

  });

});


function fallbackCopy(text, button) {

  const textarea = document.createElement("textarea");

  textarea.value = text;

  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";

  
