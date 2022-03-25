var initESW = function (gslbBaseURL) {
  embedded_svc.settings.displayHelpButton = false; //O falso
  embedded_svc.settings.language = "es-MX"; //Por ejemplo, introduzca 'en' o 'en-US'

  embedded_svc.settings.defaultMinimizedText = "Hola Soy Seba!"; //(Toma como valor predeterminado Sesión de chat con un experto)
  //embedded_svc.settings.disabledMinimizedText = '...'; //(Toma como valor predeterminado Agente sin conexión)

  //embedded_svc.settings.avatarImgURL = "";

  //embedded_svc.settings.loadingText = ''; //(Toma como valor predeterminado Cargando)
  //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Establece el dominio para su desarrollo de modo que los visitantes puedan navegar por subdominios durante una sesión de chat)

  // Configuración para Chat
  //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
  // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
  // Returns a valid button ID.
  //};
  //embedded_svc.settings.prepopulatedPrechatFields = {}; //Establece la cumplimentación automática de los campos del formulario previo al chat
  //embedded_svc.settings.fallbackRouting = []; //Una matriz de identificadores de botones, de usuario o userId_buttonId
  //embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Toma como valor predeterminado la opción Contacto)

  embedded_svc.settings.enabledFeatures = ["LiveAgent"];
  embedded_svc.settings.entryFeature = "LiveAgent";

  embedded_svc.init(
    "https://zurichcl--dev2.my.salesforce.com",
    "https://dev2-piloto.cs195.force.com",
    gslbBaseURL,
    "00D020000008p2R",
    "CanalBot",
    {
      baseLiveAgentContentURL:
        "https://c.la2-c1cs-ia4.salesforceliveagent.com/content",
      deploymentId: "572020000004CD5",
      buttonId: "573020000004CID",
      baseLiveAgentURL: "https://d.la2-c1cs-ia4.salesforceliveagent.com/chat",
      eswLiveAgentDevName: "Canalbot",
      isOfflineSupportEnabled: false,
    }
  );
};;;;;;;;;

if (!window.embedded_svc) {
  var s = document.createElement('script');
  s.setAttribute('src', 'https://zurichcl--dev2.my.salesforce.com/embeddedservice/5.0/esw.min.js');
  s.onload = function() {
    initESW(null);
  };
  document.body.appendChild(s);
} else {
  initESW('https://service.force.com');
}
