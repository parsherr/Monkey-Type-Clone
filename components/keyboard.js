app.component('typing-keyboard', {
    template: `
        <ul class="keyboard">
            <li>
                <dt>q</dt>
                <dt>w</dt>
                <dt>e</dt>
                <dt>r</dt>
                <dt>t</dt>
                <dt>y</dt>
                <dt>u</dt>
                <dt>i</dt>
                <dt>o</dt>
                <dt>p</dt>
                <dt>[</dt>
                <dt>]</dt>
            </li>
            <li>
                <dt>a</dt>
                <dt>s</dt>
                <dt>d</dt>
                <dt>f</dt>
                <dt>g</dt>
                <dt>h</dt>
                <dt>j</dt>
                <dt>k</dt>
                <dt>l</dt>
                <dt>;</dt>
                <dt>'</dt>
            </li>
            <li>
                <dt>z</dt>
                <dt>x</dt>
                <dt>c</dt>
                <dt>v</dt>
                <dt>b</dt>
                <dt>n</dt>
                <dt>m</dt>
                <dt>,</dt>
                <dt>.</dt>
                <dt>/</dt>
            </li>
            <dt id="space-button">
                <h3>we gonna hide this text</h3>
            </dt>
        </ul>
    `,
    data() {
        return {

        }
    },
    methods: {
        // Methods Here
    },
    mounted(){
        document.addEventListener("keyup", function(event){
            let clicked_key = event.key;
            var allKeys = document.querySelectorAll("dt");
            var clickSpace = (clicked_key == " ");

            allKeys.forEach(function(key){
                if (clickSpace){
                    allKeys.forEach(function(key){
                        key.style.transition = "ease .3s";
                        key.style.backgroundColor = "transparent";
                        key.style.border = "1px solid rgb(134, 134, 134)";
                        key.style.color = "rgb(134, 134, 134)";
                        key.style.boxShadow = "none";
                    });

                    var spaceButton = document.querySelector("dt#space-button");
                    spaceButton.style.transition = "ease .3s";
                    spaceButton.style.backgroundColor = "#e4e4e5";
                    spaceButton.style.border = "1px solid #e4e4e5";
                    spaceButton.style.boxShadow = "rgb(226 181 20 / 8%) 0px 6px 33px";

                    setTimeout(function(){
                        spaceButton.style.backgroundColor = "transparent";
                        spaceButton.style.border = "1px solid rgb(134, 134, 134)";
                        spaceButton.style.boxShadow = "none";
                    }, 100); // 100ms sonra eski haline dön
                }
                else if (clicked_key == key.innerHTML){
                    key.style.transition = "ease .3s";
                    key.style.backgroundColor = "#868686";
                    key.style.border = "1px solid #e4e4e5";
                    key.style.color = "black";
                    key.style.boxShadow = "rgb(226 181 20 / 8%) 0px 6px 33px";

                    setTimeout(function(){
                        key.style.backgroundColor = "transparent";
                        key.style.border = "1px solid rgb(134, 134, 134)";
                        key.style.color = "rgb(134, 134, 134)";
                        key.style.boxShadow = "none";
                    }, 100); // 100ms sonra eski haline dön
                }
                else if (clicked_key != key.innerHTML){
                    key.style.transition = "ease .3s";
                    key.style.backgroundColor = "transparent";
                    key.style.border = "1px solid rgb(134, 134, 134)";
                    key.style.color = "rgb(134, 134, 134)";
                    key.style.boxShadow = "none";
                }
            });
        });
    }
});