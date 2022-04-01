(function() {
    
    console.log("inside custom script");
    window.addEventListener("message", function(event1) {
        console.log(event1,"event1event1event1");
        try {
            let event = JSON.parse(event1.data);
            if ("ym-bot-opened" == event.event_code) {
                window.ymInterval = setInterval(() => {
                    try {
                        console.log("value triggered for event", event.event_code);
                        const frameDocument = window.frames && window.frames.ymIframe && window.frames.ymIframe.document;
                        frameDocument.getElementById("chatDetails").style.padding = "1px 20px";
                        const icon = frameDocument.getElementsByClassName("icon-wrapper");
                        if (icon) {
                            icon[0].remove();
                        }
                        const subTitle = frameDocument.getElementsByClassName("sub-title");
                        if (subTitle) {
                            subTitle[0].remove();
                        }
                        const element = frameDocument.getElementsByClassName("title");
                        console.log(element,"elementelementelementelement");
                        element[0].style['font-size'] = "19px";
                        element[0].style['line-height']= "25px";
                        element[0].style.color = "#fafafa";
                        clearInterval(window.ymInterval);
                    } catch (error) {
                        clearInterval(window.ymInterval);
                    }
                }, 100);
            }
            //addtional code
            if ("message-received" == event.event_code){
                const frameDocument = window.frames && window.frames.ymIframe && window.frames.ymIframe.document;
                const element = frameDocument.getElementsByClassName("title");
                element[0].innerHTML = "Gleneagles Hospital";
                element[0].style['font-size'] = "19px";
                element[0].style['line-height']= "25px";
                element[0].style.color = "#fafafa";
                clearInterval(window.ymInterval);
            }

        } catch (error) {
            console.log(error, "Error occured");
        }
    }, false);
})();
