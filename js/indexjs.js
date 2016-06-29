/**
 * Created by Ken on 24/06/2016.
 */

$(document).ready(function () {

    $(window).resize(function () {
        var width = $(window).width();
        if (width <= 760) {
            $('.col-xs-2').removeClass('.col-xs-2 col-half-offset');
        }
    }).resize();

    //Makes Modal Draggable
    $(".modal-dialog").draggable({
        handle: ".modal-header, .modal-footer",
        opacity: "0.5"
    });




    //Dynamic Modal Content
    $('#myModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var recipient = button.data('title');
        var modal = $(this);
        modal.find('.modal-title').text(recipient);
        $.getJSON("js/movies.json", function (data) {
            $.each(data.movies, function (i, item) {
                var movTitle = (item.title);
                if (recipient == movTitle) {
                    modal.find('.modal-body').html(item.directors + item.releaseYear + item.worldwideGross + item.plot + item.links);
                }


                if ( $(window).width() == 1920) {
                    //Wallpaper changes on poster click
                    switch (recipient) {
                        case "Aladdin":
                            $('.modal').css({
                                'background-image': 'url("img/aladdin wallpaper.jpg")',
                                'background-repeat': 'no-repeat',
                                'background-position': 'center',
                                'background-size': '100%'
                            });
                            break;
                        case "Beauty and the Beast":
                            $('.modal').css({
                                'background-image': 'url("img/beauty and the beast wallpaper.jpg")',
                                'background-repeat': 'no-repeat',
                                'background-position': 'center',
                                'background-size': '100%'
                            });
                            break;
                        case "The Little Mermaid":
                            $('.modal').css({
                                'background-image': 'url("img/lmwallpaper.jpg")',
                                'background-repeat': 'no-repeat',
                                'background-position': 'center',
                                'background-size': '100%'
                            });
                            break;
                        case "The Rescuers Down Under":
                            $('.modal').css({
                                'background-image': 'url("img/downunderwallpaper.jpg")',
                                'background-repeat': 'no-repeat',
                                'background-position': 'center',
                                'background-size': '100%'
                            });
                            break;
                        case "The Lion King":
                            $('.modal').css({
                                'background-image': 'url("img/lionkingwallpaper.jpg")',
                                'background-repeat': 'no-repeat',
                                'background-position': 'center',
                                'background-size': '100%'
                            });
                            break;
                        case "Pocahontas":
                            $('.modal').css({
                                'background-image': 'url("img/pocahontaswallpaper.jpg")',
                                'background-repeat': 'no-repeat',
                                'background-position': 'center',
                                'background-size': '100%'
                            });
                            break;
                        case "The Hunchback of Notre Dame":
                            $('.modal').css({
                                'background-image': 'url("img/hunchbackwallpaper.png")',
                                'background-repeat': 'no-repeat',
                                'background-position': 'center',
                                'background-size': '100%'
                            });
                            break;
                        case "Hercules":
                            $('.modal').css({
                                'background-image': 'url("img/herculeswallpaper.png")',
                                'background-repeat': 'no-repeat',
                                'background-position': 'center',
                                'background-size': '100%'
                            });
                            break;
                        case "Mulan":
                            $('.modal').css({
                                'background-image': 'url("img/mulanwallpaper.jpg")',
                                'background-repeat': 'no-repeat',
                                'background-position': 'center',
                                'background-size': '100%'
                            });
                            break;
                        case "Tarzan":
                            $('.modal').css({
                                'background-image': 'url("img/tarzanwallpaper.jpg")',
                                'background-repeat': 'no-repeat',
                                'background-position': 'center',
                                'background-size': '100%'
                            });
                            break;
                        default:
                    }
                } else {
                    $('.modal').css({
                       'background-image': 'none'
                    });
                }
            });
        });
    });
});






