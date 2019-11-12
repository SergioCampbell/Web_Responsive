//$('.alert').alert();

//pymes
$(document).ready(function() {
    $('#btnPymes').click(function() {
        $('#myAlert').show('fade');
    });
    $('#LinkClose').click(function() {
        $('#myAlert').hide('fade');
    });
});


//Navbar
$('#navId a').click(e => {
    e.preventDefault();
    $(this).tab('fade');
});

//scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
      });
    });
    </script>
    <script>
    window.sr = ScrollReveal();
    sr.reveal('.navbar', {
      duration: 2000,
      origin: 'bottom'
    });