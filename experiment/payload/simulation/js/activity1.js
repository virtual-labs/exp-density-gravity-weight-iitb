let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600">Fluid Mechanics: Properties of Fluids</h4>

        <div class="fs-16px">
        <p style="text-align: center">Specific weight, density and specific gravity</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let A = (Math.random() * 100) + 700;
    mass = parseFloat(A.toFixed(2));
    console.log("random mass= ", mass);
    masskg = mass / 1000;
    console.log("mass in kg= ", masskg);
    volume = 1 / 1000;
    console.log("volume= ", volume);
    density = masskg / volume;
    console.log("density= ", density);
    let btn_text = get_collapse_btn_text("Activity 1", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p>Find the density of the fluid which weighs ${mass} gm of volume in 1 litre.</p>
        <br>
        <p> $$ volume\\ in\\ m^3 = \\frac{1}{1000} volume\\ in\\ litre $$</p>
        <p style="text-align: center"><span style="display: inline-block">$$\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad=$$</span> <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='volume-inp'><span id='volume-val-sp'></span> m<sup>3</sup>
        <button class='btn btn-info std-btn' style='position: relative; left: 2vw;' onclick='verify_volume();' id='temp-btn-2' >Verify</button></p>

        <div id="density-div" style="display:none">
            <p> $$ density = \\frac{mass\\ in\\ kg}{volume\\ in\\ m^3} $$ </p>
            <p style="text-align: center"><span style="display: inline-block">$$\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad=$$</span> <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='density-inp'><span id='density-val-sp'></span>
            <button class='btn btn-info std-btn' style='position: relative; left: 2vw;' id='temp-btn-density' onclick='verify_density();' >Verify</button></p>
        </div>
    </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    //pivot_a_c();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_volume() {
    let btn = document.getElementById('temp-btn-2');
    let volume_inp1 = document.getElementById('volume-inp');
    let sp1 = document.getElementById('volume-val-sp');
    console.log("inp vol= ", volume);
    // inp_volume = <HTMLInputElement> document.getElementById(`volume_inp`);
    if (!verify_values(parseFloat(parseFloat(volume_inp1.value).toFixed(2)), parseFloat(volume.toFixed(2)))) {
        alert(`incorrect value of volume`);
        return;
    }
    volume_inp1.remove();
    sp1.innerText = `${volume}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('density-div'));
    div.style.display = 'block';
}
function verify_density() {
    let btn = document.getElementById('temp-btn-density');
    let density_inp = document.getElementById('density-inp');
    let sp2 = document.getElementById('density-val-sp');
    console.log("inp density= ", density);
    // inp_volume = <HTMLInputElement> document.getElementById(`volume_inp`);
    if (!verify_values(parseFloat(parseFloat(density_inp.value).toFixed(2)), parseFloat(density.toFixed(2)))) {
        alert(`incorrect value of density`);
        return;
    }
    density_inp.remove();
    sp2.innerText = `${density}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    calculations();
}
activity1();
//# sourceMappingURL=activity1.js.map