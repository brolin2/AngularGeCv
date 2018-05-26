var uri = '../api/CV';
$(document).ready(function () {
    //$('#AddCV').submit(function (event) {
    //    event.preventDefault();
    //    var $form = $(this)
    //    var CV = {};
    //    var url = $form.attr("action");
    //    CV.Nome = $form.find("input[id='cv_nome']").val();
    //    CV.Cognome = $form.find("input[id='cv_cognome']").val();
    //    CV.Eta = $form.find("input[id='cv_eta']").val();
    //    CV.Email = $form.find("input[id='cv_email']").val();
    //    CV.Residenza = $form.find("input[id='cv_residenza']").val();
    //    CV.Telefono = $form.find("input[id='cv_telefono']").val();
    //    var posting = $.post(url, CV);
    //    posting.done(function (data) {
    //        $("#Messagge").append(data);
    //    });
    //});
    // LoadCV("BBBB");
    $('#ModCV').submit(function (event) {
        event.preventDefault();
        var $form = $("#ModCV")
        var CV = {};
        var url = $form.attr("action");
        CV.Nome = $form.find("input[id='cv_nome']").val();
        CV.Cognome = $form.find("input[id='cv_cognome']").val();
        CV.Eta = $form.find("input[id='cv_eta']").val();
        CV.Email = $form.find("input[id='cv_email']").val();
        CV.Residenza = $form.find("input[id='cv_residenza']").val();
        CV.Telefono = $form.find("input[id='cv_telefono']").val();
        CV.Matricola = $form.find("input[id='cv_matricola']").val();
        var posting = $.post(url, CV);
        posting.done(function (data) {
            $("#Message").append(data);
        });
        //$.ajax({
        //    method: "POST",
        //    url: url,
        //    data: CV
        //}).done(function (msg) {
        //        alert("Data Saved: " + msg);
        //});

    });
    
});
function LoadCV(id) {


    $.getJSON(uri + '/' + id)
        .done(
            function (data) {
                var $div = $('#cv_Anag')
                $div.find("input[id='cv_nome']").val(data.Nome);
                $div.find("input[id='cv_cognome']").val(data.Cognome);
                $div.find("input[id='cv_eta']").val(data.Eta);
                $div.find("input[id='cv_email']").val(data.Email);
                $div.find("input[id='cv_residenza']").val(data.Residenza);
                $div.find("input[id='cv_telefono']").val(data.Telefono);
                $div.find("input[id='cv_matricola']").val(data.Matricola);

        });
    LoadCompetenze(id);
    LoadElencoPerStud(id);
    ListEspLav(id)
    $(document).trigger("TriDettagli");
    
}

function AddCv() {
    event.preventDefault();
    var $form = $("#AddCV");
    var CV = {};
    var url = "../api/CV/AddCV";
    CV.Nome = $form.find("input[id='cv_nome']").val();
    CV.Cognome = $form.find("input[id='cv_cognome']").val();
    CV.Eta = $form.find("input[id='cv_eta']").val();
    CV.Email = $form.find("input[id='cv_email']").val();
    CV.Residenza = $form.find("input[id='cv_residenza']").val();
    CV.Telefono = $form.find("input[id='cv_telefono']").val();
    //var crypto = require("crypto");
    //var mat = crypto.randomBytes(3).toString('hex');
    var mat= Math.random().toString(36).substr(2, 5);
    CV.Matricola = mat;
    var posting = $.post(url, CV);
    posting.done(function (data) {
        $("#Messagge").append(data);
        LoadCV(mat);
    });
}

var uri = '../api/CV/';
$(document).ready(function () {
    //$("#Nuovo").hide();
    //LoadCompetenze();
    //$("#frmNuovo").submit(function (event, idCV) {
    //    event.preventDefault();
    //    var $form = $(this)
    //    var competenza = {};
    //    var url = $form.attr("action");
    //    competenza.Titolo = $form.find("textarea[name='_titolo']").val();
    //    competenza.Livello = $form.find("input[name='_livello']").val();
                
    //    var posting = $.post(url, competenza, "AAAA");
    //    posting.done(function () {
    //        LoadCompetenze();
    //        $form.find("textarea[name='_titolo']").val("");
    //        $form.find("input[name='_livello']").val("");
    //    });
    //});

//function LoadS() {
//    $('#Competenza').empty();
//    $.getJSON(uri)
//        .done(function (data) {
//            $.each(data, function (key, item) {
//                $('#Competenza').append('<li class="list-group-item" onclick=LoadCompetenza(' + item.Id + ')>' + item.Titolo + item.Livello + '</li>');
//            });
//        });
//}
});
function AddComp() {
    event.preventDefault();
    var $div = $("#cv_Anag");
    var idCv = $div.find("input[id='cv_matricola']").val();
    var $form = $("#New_Comp");
    var competenza = {};
    var url = "../api/CV/" + idCv + "/Add/Competenza";
    competenza.Titolo = $form.find("input[name='_titolo']").val();
    competenza.Livello = $form.find("input[name='_livello']").val();

    var posting = $.post(url, competenza, idCv);
    posting.done(function () {
        $(document).trigger("TriHideAll");
    })
}
    function LoadCompetenze(id) {
        $('#ElencoCompetenze').empty();
        //var $div = $("#cv_Anag");
       // var idCv = $div.find("input[id='cv_matricola']").val();
        $.getJSON(uri +'/'+ id + '/Competenza')
            .done(function (data) {
                $.each(data, function (key, item) {
                    $('#ElencoCompetenze').append('<li class="list-group-item">' + item.Titolo + item.Livello + '<button style="float:right"  onclick=LoadCompetenza(' + item.Id + ')>Dettagli</button></li>');
                });
            });
        
    }

function LoadCompetenza(id) {
    $("#HeadingComp").empty();
    $("#HeadingComp").append("Dettaglio Competenza");
    var $form = $("#ModComp");
    var $div = $("#cv_Anag");
    var idCv = $div.find("input[id='cv_matricola']").val();
    $.getJSON('../api/Competenza/'+id)
        .done(function (data) {
            var $comp = $("#DettaglioCompetenze");
            $comp.find("input[id='comp_titolo']").val(data.Titolo);
            $comp.find("input[id='comp_liv']").val(data.Livello);
            $comp.find("input[id='comp_id']").val(data.Id);
            $form.find("button[id='btn_add_comp']").hide();
            $form.find("button[id='btn_del_comp']").show();
            $form.find("button[id='btn_mod_comp']").show();
            $(document).trigger("TriDettCompShow");
        });
}
//function AddProdotto() {

//}
function AddCompetenza() {          //AGGIUNGI COMPETENZA
    event.preventDefault();
    var $form = $("#ModComp");
    var $div = $("#cv_Anag");
    var idCv = $div.find("input[id='cv_matricola']").val();
    var idC = $form.find("input[id='comp_id']").val();
    var urrr = "../api/CV/" + idCv + "/Add/Competenza";
    var Comp = {};
    Comp.Titolo = $form.find("input[id='comp_titolo']").val();
    Comp.Livello = $form.find("input[id='comp_liv']").val();
    var posting = $.post(urrr, Comp, idCv);
    
    posting.done(function () {
        $(document).trigger("TriHideAll");
        ClearComp();
        LoadCompetenze(idCv);
    })
}
function ClearComp() {
    $("#HeadingComp").empty();
    $("#HeadingComp").append("Aggiungi Competenza");
    var $form = $("#ModComp");
    $form.find("button[id='btn_mod_comp']").hide();
    $form.find("button[id='btn_del_comp']").hide();
    $form.find("button[id='btn_add_comp']").show();
    $form.find("input[id='comp_titolo']").val("");
    $form.find("input[id='comp_liv']").val("");
    $(document).trigger("TriDettCompShow");
}

function ModificaCompetenze() {
    event.preventDefault();
    var $form = $("#ModComp");
    var idC = $form.find("input[id='comp_id']").val();
    var urrr = "../api/Competenza/Put/" + idC;
    var Comp = {};
    Comp.Id = $form.find("input[id='comp_id']").val();
    Comp.Titolo = $form.find("input[id='comp_titolo']").val();
    Comp.Livello = $form.find("input[id='comp_liv']").val();
    alert("rrr:" + urrr + "   - Comp:" + Comp);
    $.ajax({
        url: urrr,
        method: "PUT",
        data: Comp,
        success: function (data) {
            $(document).trigger("TriHideAll");
            
        }/*).fail(function (data){
            *  $("body").prepend(document.createTextNode("ERRORE!!!"));
            *  });*/
    });
}

function DeleteComp() {
    event.preventDefault();
    var $form = $("#ModComp");
    var idC = $form.find("input[id='comp_id']").val();
    var urlo = "../api/Competenza/Del/" + idC;
    $.ajax({
        url: urlo,
        method: "Delete",
        success: function (data) {
            $(document).trigger("TriHideAll");
        }/*).fail(function (data){
            *  $("body").prepend(document.createTextNode("ERRORE!!!"));
            *  });*/
    });
}
$(document).ready(function () {
    AddEspLAv();
});

function AddEspLAv() {
    $('#AddEspLav').show();
    $("#frmNuovo").submit(function (event) {
        event.preventDefault();
        var $form = $(this);
        var EspLav = {};
        EspLav.Qualifica = $form.find("input[name='_mansione']").val();
        EspLav.Descrizione = $form.find("textarea[name='_descrizione']").val();
        EspLav.AnnoInizio = $form.find("input[name='_inizio']").val();
        EspLav.AnnoFine = $form.find("input[name='_fine']").val();
        var posting = $.post($form.attr("action"), EspLav);
        posting.done(function (data) {
            $(document).trigger("EspLavAdded", data);
            $("#Message").append(data);
        });
        $('#AddEspLav').hide();
        ListEspLav()
    });
}
var uri = '../api/CV';
function CercaCv() {
    $('#CVs').empty();
    $.getJSON(uri)
        .done(function (data) {
            $.each(data, function (key, item) {
                $('#CVs').append('<li class="list-group-item"> Nome: ' + item.Nome +' Cognome: '+ item.Cognome +' Matricola:'+ item.Matricola +
                    '<button class="btn btn-info"  onclick="LoadCV(\''+ item.Matricola + '\')">Dettagli</button></li>');
            });
        });
}
var uri = '../api/CV/EEEE/EspLav';
$(document).ready(function () {
    ListEspLav()
});
function ListEspLav() {
    $('#ListEspLav').empty();
    $('#DettEspLav').hide();
    $('#AddEspLav').hide();

    $.getJSON(uri)
        .done(function (data) {
            $.each(data, function (key, item) {
                $('#ListEspLav').append('<div id="ciao" class="col-md-8">' + item.Qualifica + '</div><div class="col-md-2"><button class="btn btn-default" onclick="LoadEspLav(' + item.Id + ')"role=button>Dettagli</button></div></div><div class="col-md-2"><button class="btn btn-default" onclick="DelEsp(' + item.Id + ')"role=button>Elimina</button></div>');

            });
        });
}
function DelEsp(id) {
    $.ajax({
        url: '../api/CV/EEEE/EspLav/' + id,
        type: 'DELETE',
        success: function (result) {
                ListEspLav()
        },
    });
}
var percor = '../api/CV/';

//$(document).ready(function () {
//    //$('#Aggiungi').hide();
//    LoadPerStud();
//});
function LoadElencoPerStud(id) {
    $("#Percorso").empty();
    $.getJSON(uri + '/' + id + '/PerStud')
        .done(function (data) {
            $.each(data, function (key, item) {
                $("#Percorso").append('<li class="list-group-item" >' + item.Titolo + '<button style="float:right" onclick=LoadDettPerStudi(' + item.Id + ')>DETTAGLI</button></li>');
            });
        });
    
}
function LoadDettPerStudi(id) {         //DETTAGLIO 
    $("#HeadingPerStud").empty();
    $("#HeadingPerStud").append("Dettaglio Percorso Studi");
    var $form = $("#ModPerStud");
    $.getJSON('../api/PerStud/' + id)
        .done(function (data) {
            var $PerStud = $("#DettaglioPercorso");
            $PerStud.find("input[id='perstud_AI']").val(data.AnnoInizio);
            $PerStud.find("input[id='perstud_AF']").val(data.AnnoFine);
            $PerStud.find("input[id='perstud_titolo']").val(data.Titolo);
            $PerStud.find("input[id='perstud_descrizione']").val(data.Descrizione);
            $PerStud.find("input[id='perstud_id']").val(data.Id);
            $form.find("button[id='btn_add_perstudi']").hide();
            $form.find("button[id='btn_del_perstudi']").show();
            $form.find("button[id='btn_mod_perstudi']").show();
            $(document).trigger("TriDettPSShow");
        });
}
function DelPerStud() {                 //DELETE
    event.preventDefault();
    var $form = $("#ModPerStud");
    var idP = $form.find("input[id='perstud_id']").val();
    var urlo = "../api/PerStud/Del/" + idP;
    $.ajax({
        url: urlo,
        method: "DELETE",
        success: function (data) {
            $(document).trigger("TriHideAll");

        }
    });
}
function ModificaPerStud() {            //MODIFICA
    event.preventDefault();
    var $form = $("#ModPerStud");
    var idP = $form.find("input[id='perstud_id']").val();
    var urlo = "../api/PerStud/Put/" + idP;
    var ps = {};
    ps.Id = $form.find("input[id='perstud_id']").val();
    ps.AnnoInizio = $form.find("input[id='perstud_AI']").val();
    ps.AnnoFine = $form.find("input[id='perstud_AF']").val();
    ps.Titolo = $form.find("input[id='perstud_titolo']").val();
    ps.Descrizione = $form.find("input[id='perstud_descrizione']").val();
    $.ajax({
        url: urlo,
        method: "PUT",
        data: ps,
        success: function (data) {
        $(document).trigger("TriHideAll");

        }
    });

}
function AddPerStud() {
    event.preventDefault();
    var $div = $("#cv_Anag");
    var idCv = $div.find("input[id='cv_matricola']").val();
    var url = "../api/CV/" + idCv + "/Add/PerStud";
    var $form = $("#ModPerStud");
    var ps = {};
    ps.AnnoInizio = $form.find("input[id='perstud_AI']").val();
    ps.AnnoFine = $form.find("input[id='perstud_AF']").val();
    ps.Titolo = $form.find("input[id='perstud_titolo']").val();
    ps.Descrizione = $form.find("input[id='perstud_descrizione']").val();
    
    var posting = $.post(url, ps, idCv);
    posting.done(function () {
        $(document).trigger("TriHideAll");
        Libera_Add_PerStud();
        LoadElencoPerStud(idCv);

    })
}
function Libera_Add_PerStud() {
    $("#HeadingPerStud").empty();
    $("#HeadingPerStud").append("Aggiungi Percorso Studi");
    var $PerStud = $("#ModPerStud");
    var $form = $("#ModPerStud");
    $form.find("button[id='btn_mod_perstudi']").hide();
    $form.find("button[id='btn_del_perstudi']").hide();
    $form.find("button[id='btn_add_perstudi']").show();
    $PerStud.find("input[id='perstud_AI']").val("");
    $PerStud.find("input[id='perstud_AF']").val("");
    $PerStud.find("input[id='perstud_titolo']").val("");
    $PerStud.find("input[id='perstud_descrizione']").val("");
    $(document).trigger("TriDettPSShow");
}
/*
$(document).ready(function () {
    $("#Aggiungi").submit(function (event) {
        event.preventDefault();
        var $form = $(this);
        var percorso = {};
        var url = $form.attr("action");
        percorso.Titolo = $form.find("input[name='_titolo']").val();
        percorso.Descrizione = $form.find("input[name='_descrizione']").val();
        percorso.AnnoInizio = $form.find("input[name='_AnnoInizio']").val();
        percorso.AnnoFine = $form.find("input[name='_AnnoFine']").val();
        var posting = $.post(url, percorso);
    });
});
*/

$(document).ready(function () {
    $("#MessaggeError").hide();
    $("#MessaggeWarning").hide();
})
function SvuotaCampi() {
    var $div = $('#parametri');
    $div.find("input[id='S_cognome']").val("");
    $div.find("input[id='S_chiava']").val("");
    $div.find("input[id='S_eta']").val("");
    $div.find("input[id='S_eta_max']").val("");
    $div.find("input[id='S_eta_min']").val("");

}

function Cerca() {
    var $div = $('#parametri')
    if ($div.find("input[id='S_cognome']").val() != "") {
        var url = '../api/CercaCognome/' + $div.find("input[id='S_cognome']").val();
    } else if ($div.find("input[id='S_chiava']").val() != "") {
        var url = '../api/CercaChiava/' + $div.find("input[id='S_chiava']").val();
    } else if ($div.find("input[id='S_eta']").val() != 0) {
        var url = '../api/CercaEta/' + $div.find("input[id='S_eta']").val();
    } else if ($div.find("input[id='S_eta_min']").val() != 0 && $div.find("input[id='S_eta_max']").val() != 0) {
        if ($div.find("input[id='S_eta_min']").val() < $div.find("input[id='S_eta_max']").val()) {
            var url = '../api/CercaMinMax/' + $div.find("input[id='S_eta_min']").val() + '/' + $div.find("input[id='S_eta_max']").val();
        } else {
            ErrorMessage();
            return;
        }
    }
    $.getJSON(url)
        .done(function (data) {
            if (data.length == 0) {
                WarningMessage();
            } else {
            $('#CVs').empty();
            $.each(data, function (key, item) {
                $('#CVs').append('<li class="list-group-item col-md-10"> Nome: ' + item.Nome + ' Cognome: ' + item.Cognome + ' Matricola:' + item.Matricola +
                    '<button class="btn btn-info col-md-2"  onclick="LoadCV(\'' + item.Matricola + '\')">Dettagli</button></li>');

                });
                $("#MessaggeError").hide();
                $("#MessaggeWarning").hide();
            $(document).trigger("TriSearch");

            }
        });
}

function ErrorMessage() {
    $('#MessaggeWarning').hide();
    $('#MessaggeError').empty();
    $("#MessaggeError").append('<span class="closebtn"  onclick="this.parentElement.style.display=\'none\';">&times;</span><strong> Danger!</strong > ');
    $("#MessaggeError").append("Parametri ERRATI!!");
    $('#MessaggeError').show();
    SvuotaCampi();
}
function WarningMessage() {
    $('#MessaggeError').hide();
    $('#MessaggeWarning').empty();
    $("#MessaggeWarning").append('<span class="closebtn"  onclick="this.parentElement.style.display=\'none\';">&times;</span><strong> Warning</strong > ');
    $("#MessaggeWarning").append("Sono spiacente! non ho trovato nulla <strong> : ( </strong>");
    $('#MessaggeWarning').show();
    SvuotaCampi();
}
   