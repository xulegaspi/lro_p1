/**
 * Created by Xurxo on 09/06/2016.
 */

function complete(doc) {
    doc.elements["browser"].value = get_browser();
    doc.elements["date"].value = new Date();
}

function vUsername(data) {
    username = data.value;
    if(username.length < 6 && username.length != 0) {
        document.getElementById("username_error").innerHTML = "Invalid username. It should contain over 6 characters.";
        document.getElementById("submitId").disabled = true;
    } else {
        document.getElementById("username_error").innerHTML = "";
        document.getElementById("submitId").disabled = false;
    }
}

function vPassword(data) {
    pass = data.value;
    if(pass.length < 4 && pass.length != 0) {
        document.getElementById("pass_error").innerHTML = "Invalid password. It should contain over 4 characters.";
        document.getElementById("submitId").disabled = true;
    } else {
        document.getElementById("pass_error").innerHTML = "";
        document.getElementById("submitId").disabled = false;
    }
}

function ChangeMethod() {
    form = document.getElementById("formId");
    radio_post = document.getElementById("method_post").checked;
    radio_get = document.getElementById("method_get").checked;
    if(radio_get == true) form.method="get";
    else if(radio_post == true) form.method="post";
}

function ChangeEncType() {
    form = document.getElementById("formId");
    radio_url = document.getElementById("enctype_urlencoded").checked;
    radio_multi=document.getElementById("enctype_multipart").checked;
    if(radio_multi==true) form.enctype="multipart/form-data";
    else if(radio_url==true) form.enctype="application/x-www-form-urlencoded";
}

function ChangeAction() {
    form=document.getElementById("formId");
    radio_student=document.getElementById("action_student").checked;
    radio_teacher=document.getElementById("action_teacher").checked;
    if(radio_teacher==true)  form.action="/../../~lroprof/p1.php";
    else if(radio_student==true) form.action="p1.php";
}

function get_browser() {
    var Agent = navigator.userAgent;

    // Opera
    Offset=Agent.indexOf("Opera");
    if (Offset!=-1) {
        Name = "Opera";
        Offset2=Agent.indexOf("Version");
        if (Offset2!=-1) Version = Agent.substring(Offset+8);
        else Version = Agent.substring(Offset+6);
        Version=trim_version(Version);
        return Name + " " + Version;
    }
    //MSIE
    Offset=Agent.indexOf("MSIE");
    if (Offset!=-1) {
        Name = "Microsoft Internet Explorer";
        Version = Agent.substring(Offset+5);
        Version=trim_version(Version);
        return Name + " " + Version;
    }
    //Chrome
    Offset=Agent.indexOf("Chrome");
    if (Offset!=-1) {
        Name = "Chrome";
        Version = Agent.substring(Offset+7);
        Version=trim_version(Version);
        return Name + " " + Version;
    }
    //Safari
    Offset=Agent.indexOf("Safari");
    if (Offset!=-1) {
        Name = "Safari";
        Offset2=Agent.indexOf("Version");
        if (Offset2!=-1) Version = Agent.substring(Offset+8);
        else Version = Agent.substring(Offset+7);
        Version=trim_version(Version);
        return Name + " " + Version;
    }
    //Firefox
    Offset=Agent.indexOf("Firefox");
    if (Offset!=-1) {
        Name = "Firefox";
        Version = Agent.substring(Offset+8);
        Version=trim_version(Version);
        return Name + " " + Version;
    }

    return Agent;
}

function trim_version(Version){
    colon=Version.indexOf(";");
    space=Version.indexOf(" ");
    if (colon!=-1) Version=Version.substring(0,colon);
    if (space!=-1) Version=Version.substring(0,space);
    return Version;
}