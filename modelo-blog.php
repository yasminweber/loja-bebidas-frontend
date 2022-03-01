<?php require('config/header.php'); ?>
<main id="blog">
    <!-- menu -->
    <?php require('components/menu.php'); ?>
    <!-- modulo-17 -->
    <?php require('components/modulo-17.php'); ?>
    <!-- modulo-18 -->
    <?php require('components/modulo-18.php'); ?>
    <!-- modulo-19 -->
    <?php require('components/modulo-19.php'); ?>
    <!-- rodape -->
    <?php require('components/rodape.php'); ?>
    <!-- btn whatsapp -->
    <?php require('components/btn-whatsapp.php'); ?>
</main>
<?php require('config/footer.php'); ?>
<script>
    $(document).ready(function() {

        var $btns = $('.modulo-18 .nav .nav-item .nav-link').click(function() {
            if (this.id == '0') {
                $('.modulo-19 #box-pai > div').fadeIn(400);
            } else {
                var $selected = $('.' + this.id).fadeIn(400);
                $('.modulo-19 #box-pai > div').not($selected).hide();
            }

            $btns.removeClass('ativo');
            $(this).addClass('ativo');
        });
    });
</script>