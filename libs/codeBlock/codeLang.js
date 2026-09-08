// 代码块语言识别

$(function () {
  $('pre').each(function () {
    var $pre = $(this);
    var code_language = $pre.attr('data-language') || $pre.attr('class') || '';

    if (!code_language) {
      return true;
    }

    var lang_name = code_language.replace("line-numbers", "").trim().replace("language-", "").trim();

    if (lang_name === 'markup') {
      lang_name = 'html';
    }

    var $highlight_lang = $('<div class="code_lang" title="代码语言"></div>');
    $pre.before($highlight_lang);
    $pre.siblings(".code_lang").text(lang_name);
  });
});
