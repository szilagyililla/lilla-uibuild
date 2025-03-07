document.querySelector("#root").insertAdjacentHTML('beforeend', `
    <h1>Visszajelzés</h1>
    <form>
        <input type = "text" placeholder = "Tárgy" name = "subject">
        <textarea placeholder = "Megjegyzés" name = "message"></textarea>

        <div class="checkbox-container">
            <label>
                <input type="checkbox" name="privacy">
                Elolvastam és elfogadom az 
                <a href="adatkezelesi-tajekoztato.html" target="_blank">
                Adatkezelési Tájékoztatót.</a>
            </label>
             <label>
                <input type="checkbox" name="privacy">
               Szeretnék hírlevelet kapni.
            </label>
        </div>

        <button type="submit">MENTÉS</button>
    </form>    
`)

