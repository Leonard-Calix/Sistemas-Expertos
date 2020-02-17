$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  $(document).ready(function(){
    $('#txt-content').Editor();

    $('#txt-content').Editor('setText', ['<p style="color:red;">Hola</p>']);

    $('#btn-enviar').click(function(e){
      e.preventDefault();
      $('#txt-content').text($('#txt-content').Editor('getText'));
      $('#frm-test').submit();				
    });
  });