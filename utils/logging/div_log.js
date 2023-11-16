let console = function() {
    return({
        log: function(msg) {
          main_block = document.getElementById('console_output');
          output_block = document.createElement('p');
          output_line = document.createTextNode(msg);
          main_block.appendChild(output_line);
          main_block.appendChild(output_block);
        }
    });
}();
