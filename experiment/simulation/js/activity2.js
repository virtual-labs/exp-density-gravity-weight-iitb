function calculations() {
    let B = (Math.random() * 1) + 7;
    weight = parseFloat(B.toFixed(2));
    console.log("random weight= ", weight);
    act2_mass = weight / gravity;
    console.log("act2 mass= ", act2_mass);
    act2_density = act2_mass / volume;
    console.log("act2 density= ", act2_density);
    specific_gravity = act2_density / water_density;
    console.log("specific gravity= ", specific_gravity);
    specific_weight = act2_density * gravity;
    console.log("specific weight= ", specific_weight);
    start_act2();
}
function activity2() {
    let text = `
        <div class='divide'>
            <div style='margin-top: 2vw;'>
                <br>
                <div class="fs-16px">
                    <p>Calculate the density, specific gravity and specific weight of 1 litre of liquid having weight ${weight} N</p>
                </div>
                <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-act-2' >Next</button>
            </div>
        </div>
        `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-act-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Activity 2", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <p>Calculate the density, specific gravity and specific weight of 1 litre of liquid having weight ${weight} N</p>
        <br>
        $$ volume\\ in\\ m^3 = \\frac{1}{1000} volume\\ in\\ litre $$
        <p style="text-align: center"><span style="display: inline-block">$$\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad=$$</span> <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='act2-volume-inp'><span id='act2-volume-val-sp'></span> <span style="display: inline-block">$$m^3$$</span> 
        <button class='btn btn-info std-btn' style='position: relative; left: 2vw;' onclick='act2_verify_volume();' id='act2-temp-btn-2' >Verify</button> </p>
        <br>
        <div id="act2-mass-div" style="display:none">
            $$ mass = \\frac{weight}{gravity} $$
            <p style="text-align: center"><span style="display: inline-block">$$\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad=$$</span> <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='act2-mass-inp'><span id='act2-mass-val-sp'></span> kg
            <button class='btn btn-info std-btn' style='position: relative; left: 2vw;' id='temp-btn-act2-mass' onclick='act2_verify_mass();' >Verify</button> </p>
        </div>
        <br>
        <div id="act2-density-div" style="display:none">
            <p> $$ density = \\frac{mass}{volume} $$ </p>
            <p style="text-align: center"><span style="display: inline-block">$$\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad=$$</span> <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='act2-density-inp'><span id='act2-density-val-sp'></span> kg/m<sup>3</sup>
            <button class='btn btn-info std-btn' style='position: relative; left: 2vw;' id='temp-btn-act2-density' onclick='act2_verify_density();' >Verify</button> </p>
        </div>
        <br>
        <div id="act2-spgr-div" style="display:none">
            <p> $$ specific\\ gravity = \\frac{density\\ of\\ liquid}{density\\ of\\ water} $$ </p>
            <p style="text-align: center"><span style="display: inline-block">$$\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\quad=$$</span> <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='act2-spgr-inp'><span id='act2-spgr-val-sp'></span>
            <button class='btn btn-info std-btn' style='position: relative; left: 2vw;' id='temp-btn-act2-spgr' onclick='act2_verify_specific_gravity();' >Verify</button> </p>
        </div>

        <div id="act2-spwt-div" style="display:none">
            <p> $$ specific\\ weight = density\\ X\\ g $$ </p>
            <p style="text-align: center"><span style="display: inline-block">$$\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad\\qquad=$$</span> <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='act2-spwt-inp'><span id='act2-spwt-val-sp'></span> N/m<sup>3</sup>
            <button class='btn btn-info std-btn' style='position: relative; left: 2vw;' id='temp-btn-act2-spwt' onclick='act2_verify_specific_weight();' >Verify</button> </p>
        </div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb2-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function act2_verify_volume() {
    let btn = document.getElementById('act2-temp-btn-2');
    let act2_volume_inp1 = document.getElementById('act2-volume-inp');
    let act2_sp1 = document.getElementById('act2-volume-val-sp');
    console.log("inp vol= ", act2_volume_inp1.value);
    // inp_volume = <HTMLInputElement> document.getElementById(`volume_inp`);
    if (!verify_values(parseFloat(parseFloat(act2_volume_inp1.value).toFixed(2)), parseFloat(volume.toFixed(2)))) {
        alert(`incorrect value of volume`);
        return;
    }
    act2_volume_inp1.remove();
    act2_sp1.innerText = `${volume}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('act2-mass-div'));
    div.style.display = 'block';
}
function act2_verify_mass() {
    let btn = document.getElementById('temp-btn-act2-mass');
    let act2_mass_inp = document.getElementById('act2-mass-inp');
    let act2_sp2 = document.getElementById('act2-mass-val-sp');
    console.log("inp mass act2= ", act2_mass);
    if (!verify_values(parseFloat(parseFloat(act2_mass_inp.value).toFixed(2)), parseFloat(act2_mass.toFixed(2)))) {
        alert(`incorrect value of volume`);
        return;
    }
    act2_mass_inp.remove();
    act2_sp2.innerText = `${parseFloat(act2_mass.toFixed(4))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('act2-density-div'));
    div.style.display = 'block';
}
function act2_verify_density() {
    let btn = document.getElementById('temp-btn-act2-density');
    let act2_density_inp = document.getElementById('act2-density-inp');
    let act2_sp2 = document.getElementById('act2-density-val-sp');
    console.log("inp density act2= ", act2_density);
    if (!verify_values(parseFloat(parseFloat(act2_density_inp.value).toFixed(2)), parseFloat(act2_density.toFixed(2)))) {
        alert(`incorrect value of volume`);
        return;
    }
    act2_density_inp.remove();
    act2_sp2.innerText = `${parseFloat(act2_density.toFixed(4))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('act2-spgr-div'));
    div.style.display = 'block';
}
function act2_verify_specific_gravity() {
    let btn = document.getElementById('temp-btn-act2-spgr');
    let act2_spgr_inp = document.getElementById('act2-spgr-inp');
    let act2_sp2 = document.getElementById('act2-spgr-val-sp');
    console.log("inp spgr act2= ", specific_gravity);
    if (!verify_values(parseFloat(parseFloat(act2_spgr_inp.value).toFixed(2)), parseFloat(specific_gravity.toFixed(2)))) {
        alert(`incorrect value of volume`);
        return;
    }
    act2_spgr_inp.remove();
    act2_sp2.innerText = `${parseFloat(specific_gravity.toFixed(4))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('act2-spwt-div'));
    div.style.display = 'block';
}
function act2_verify_specific_weight() {
    let btn = document.getElementById('temp-btn-act2-spwt');
    let act2_spwt_inp = document.getElementById('act2-spwt-inp');
    let act2_sp2 = document.getElementById('act2-spwt-val-sp');
    console.log("inp spwt act2= ", specific_weight);
    if (!verify_values(parseFloat(parseFloat(act2_spwt_inp.value).toFixed(2)), parseFloat(specific_weight.toFixed(2)))) {
        alert(`incorrect value of volume`);
        return;
    }
    act2_spwt_inp.remove();
    act2_sp2.innerText = `${parseFloat(specific_weight.toFixed(4))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    exp_complete();
}
function exp_complete() {
    let btn = (document.getElementById('temp-btn-act2-spwt'));
    btn && btn.remove();
    alert('Experiment completed');
}
//# sourceMappingURL=activity2.js.map