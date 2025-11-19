// Convert GSM ↔ Micron
document.getElementById("btnGsmCompute").onclick = () => {
  const mode = document.getElementById("gsmMode").value;
  const micron = parseFloat(document.getElementById("micron").value);
  const gsm = parseFloat(document.getElementById("gsm").value);
  const density = parseFloat(document.getElementById("density").value);
  let result = "";

  if (mode === "gsmFromMicron") {
    const gsmValue = micron * density;
    result = `GSM = ${gsmValue.toFixed(2)} g/m²`;
  } else {
    const micronValue = gsm / (density);
    result = `Thickness = ${micronValue.toFixed(2)} µm`;
  }

  document.getElementById("gsmMicronResult").textContent = result;
};

document.getElementById("btnGsmClear").onclick = () => {
  document.getElementById("micron").value = "";
  document.getElementById("gsm").value = "";
  document.getElementById("gsmMicronResult").textContent = "Result shows here";
};

// Weight calculation
document.getElementById("btnWeightCalc").onclick = () => {
  const gsm = parseFloat(document.getElementById("calc_gsm").value);
  const width = parseFloat(document.getElementById("width_mm").value);
  const length = parseFloat(document.getElementById("length_m").value);
  const weight = (gsm * width * length) / 1000000;
  document.getElementById("weightResult").textContent = `Roll Weight = ${weight.toFixed(3)} kg`;
};

document.getElementById("btnWeightClear").onclick = () => {
  document.getElementById("weightResult").textContent = "Result shows here";
};

// Price conversions
document.getElementById("btnPriceToKg").onclick = () => {
  const priceM = parseFloat(document.getElementById("price_per_meter").value);
  const weightM = parseFloat(document.getElementById("weight_per_meter").value);
  const priceKg = priceM / weightM;
  document.getElementById("priceResult").textContent = `Price per kg = ${priceKg.toFixed(2)} ৳`;
};

document.getElementById("btnPriceToMeter").onclick = () => {
  const priceKg = parseFloat(document.getElementById("price_per_kg").value);
  const weightM = parseFloat(document.getElementById("weight_per_meter").value);
  const priceM = priceKg * weightM;
  document.getElementById("priceResult").textContent = `Price per meter = ${priceM.toFixed(2)} ৳`;
};

// Reel weight
document.getElementById("btnReelCompute").onclick = () => {
  const weight = parseFloat(document.getElementById("reel_weight").value);
  const length = parseFloat(document.getElementById("reel_length").value);
  const perMeter = weight / length;
  document.getElementById("reelResult").textContent = `Weight per meter = ${perMeter.toFixed(4)} kg/m`;
};

document.getElementById("btnReelClear").onclick = () => {
  document.getElementById("reelResult").textContent = "Result shows here";
};
