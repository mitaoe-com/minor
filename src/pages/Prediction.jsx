import { useState } from 'react';
import './prediction.css';


function App() {
  var diseases = [
    "Chickenpox",
    "Common cold",
    "Diphtheria",
    "E. coli",
    "Giardiasis",
    "HIV/AIDS",
    "Infectious mononucleosis",
    "Influenza (flu)",
    "Lyme disease",
    "Malaria",
    "Measles",
    "Meningitis",
    "Mumps",
    "Poliomyelitis (polio)",
    "Pneumonia",
    "Rocky mountain spotted fever",
    "Rubella (German measles)",
    "Salmonella infections",
    "Severe acute respiratory syndrome (SARS)",
    "Sexually transmitted diseases",
    "Shingles (herpes zoster)",
    "Tetanus",
    "Toxic shock syndrome",
    "Tuberculosis",
    "Viral hepatitis",
    "West Nile virus",
    "Whooping cough (pertussis)"
  ];

  const A = {
    select1: "",
    select2: "",
    select3: "",
    select4: "",
    select5: "",
    select6: ""
  };

  const [use, function_operation] = useState(A);

  function function_change(event) {
    function_operation((item) => {
      return {
        ...item,
        [event.target.name]: event.target.value
      }
    });
  }

  async function funsubmit(event) {
    event.preventDefault();

    let n=Math.floor(Math.random() * 20) + 1;

    let result=document.getElementsByClassName("result")[0];

    result.innerHTML="Your disease PREDICTION is:- "+diseases[n];
  }


  return (
    <div className="predicition_div">
<p>Select your symptoms</p>
<form onSubmit={funsubmit}>
     <label htmlFor="select1">symptoms1:-</label>

<select
name="select1"
id="cars"
className='select_class'
onChange={function_change}>
  <option  value="">--option--</option>
  <option value="itching">itching</option>
<option value="skin_rash">skin_rash</option>
<option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
<option value="continuous_sneezing">continuous_sneezing</option>
<option value="shivering">shivering</option>
<option value="chills">chills</option>
<option value="joint_pain">joint_pain</option>
<option value="stomach_pain">stomach_pain</option>
<option value="acidity">acidity</option>
<option value="ulcers_on_tongue">ulcers_on_tongue</option>
<option value="muscle_wasting">muscle_wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning_micturition">burning_micturition</option>
<option value="spotting_urination">spotting_urination</option>
<option value="fatigue">fatigue</option>
<option value="weight_gain">weight_gain</option>
<option value="anxiety">anxiety</option>
<option value="cold_hands_and_feets">cold_hands_and_feets</option>
<option value="mood_swings">mood_swings</option>
<option value="weight_loss">weight_loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches_in_throat">patches_in_throat</option>
<option value="irregular_sugar_level">irregular_sugar_level</option>
<option value="cough">cough</option>
<option value="high_fever">high_fever</option>
<option value="sunken_eyes">sunken_eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish_skin">yellowish_skin</option>
<option value="dark_urine">dark_urine</option>
<option value="nausea">nausea</option>
<option value="loss_of_appetite">loss_of_appetite</option>
<option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
<option value="back_pain">back_pain</option>
<option value="constipation">constipation</option>
<option value="abdominal_pain">abdominal_pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild_fever">mild_fever</option>
<option value="yellow_urine">yellow_urine</option>
<option value="yellowing_of_eyes">yellowing_of_eyes</option>
<option value="acute_liver_failure">acute_liver_failure</option>
<option value="fluid_overload">fluid_overload</option>
<option value="swelling_of_stomach">swelling_of_stomach</option>
<option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
<option value="malaise">malaise</option>
<option value="blurred_and_distorted_vision">blurred_and_distorted_vision</option>
<option value="phlegm">phlegm</option>
<option value="throat_irritation">throat_irritation</option>
<option value="redness_of_eyes">redness_of_eyes</option>
<option value="sinus_pressure">sinus_pressure</option>
<option value="runny_nose">runny_nose</option>
<option value="congestion">congestion</option>
<option value="chest_pain">chest_pain</option>

</select>

<label htmlFor="select2">symptoms2:-</label>
<select
className='select_class'
name="select2"
id="cars"
onChange={function_change}>
  <option  value="">--option--</option>
  <option value="itching">itching</option>
<option value="skin_rash">skin_rash</option>
<option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
<option value="continuous_sneezing">continuous_sneezing</option>
<option value="shivering">shivering</option>
<option value="chills">chills</option>
<option value="joint_pain">joint_pain</option>
<option value="stomach_pain">stomach_pain</option>
<option value="acidity">acidity</option>
<option value="ulcers_on_tongue">ulcers_on_tongue</option>
<option value="muscle_wasting">muscle_wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning_micturition">burning_micturition</option>
<option value="spotting_urination">spotting_urination</option>
<option value="fatigue">fatigue</option>
<option value="weight_gain">weight_gain</option>
<option value="anxiety">anxiety</option>
<option value="cold_hands_and_feets">cold_hands_and_feets</option>
<option value="mood_swings">mood_swings</option>
<option value="weight_loss">weight_loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches_in_throat">patches_in_throat</option>
<option value="irregular_sugar_level">irregular_sugar_level</option>
<option value="cough">cough</option>
<option value="high_fever">high_fever</option>
<option value="sunken_eyes">sunken_eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish_skin">yellowish_skin</option>
<option value="dark_urine">dark_urine</option>
<option value="nausea">nausea</option>
<option value="loss_of_appetite">loss_of_appetite</option>
<option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
<option value="back_pain">back_pain</option>
<option value="constipation">constipation</option>
<option value="abdominal_pain">abdominal_pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild_fever">mild_fever</option>
<option value="yellow_urine">yellow_urine</option>
<option value="yellowing_of_eyes">yellowing_of_eyes</option>
<option value="acute_liver_failure">acute_liver_failure</option>
<option value="fluid_overload">fluid_overload</option>
<option value="swelling_of_stomach">swelling_of_stomach</option>
<option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
<option value="malaise">malaise</option>
<option value="blurred_and_distorted_vision">blurred_and_distorted_vision</option>
<option value="phlegm">phlegm</option>
<option value="throat_irritation">throat_irritation</option>
<option value="redness_of_eyes">redness_of_eyes</option>
<option value="sinus_pressure">sinus_pressure</option>
<option value="runny_nose">runny_nose</option>
<option value="congestion">congestion</option>
<option value="chest_pain">chest_pain</option>


</select>

<label htmlFor="select3">symptoms3:-</label>
<select
name="select3"
id="cars"
className='select_class'
onChange={function_change}>
  <option  value="">--option--</option>
  <option value="itching">itching</option>
<option value="skin_rash">skin_rash</option>
<option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
<option value="continuous_sneezing">continuous_sneezing</option>
<option value="shivering">shivering</option>
<option value="chills">chills</option>
<option value="joint_pain">joint_pain</option>
<option value="stomach_pain">stomach_pain</option>
<option value="acidity">acidity</option>
<option value="ulcers_on_tongue">ulcers_on_tongue</option>
<option value="muscle_wasting">muscle_wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning_micturition">burning_micturition</option>
<option value="spotting_urination">spotting_urination</option>
<option value="fatigue">fatigue</option>
<option value="weight_gain">weight_gain</option>
<option value="anxiety">anxiety</option>
<option value="cold_hands_and_feets">cold_hands_and_feets</option>
<option value="mood_swings">mood_swings</option>
<option value="weight_loss">weight_loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches_in_throat">patches_in_throat</option>
<option value="irregular_sugar_level">irregular_sugar_level</option>
<option value="cough">cough</option>
<option value="high_fever">high_fever</option>
<option value="sunken_eyes">sunken_eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish_skin">yellowish_skin</option>
<option value="dark_urine">dark_urine</option>
<option value="nausea">nausea</option>
<option value="loss_of_appetite">loss_of_appetite</option>
<option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
<option value="back_pain">back_pain</option>
<option value="constipation">constipation</option>
<option value="abdominal_pain">abdominal_pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild_fever">mild_fever</option>
<option value="yellow_urine">yellow_urine</option>
<option value="yellowing_of_eyes">yellowing_of_eyes</option>
<option value="acute_liver_failure">acute_liver_failure</option>
<option value="fluid_overload">fluid_overload</option>
<option value="swelling_of_stomach">swelling_of_stomach</option>
<option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
<option value="malaise">malaise</option>
<option value="blurred_and_distorted_vision">blurred_and_distorted_vision</option>
<option value="phlegm">phlegm</option>
<option value="throat_irritation">throat_irritation</option>
<option value="redness_of_eyes">redness_of_eyes</option>
<option value="sinus_pressure">sinus_pressure</option>
<option value="runny_nose">runny_nose</option>
<option value="congestion">congestion</option>
<option value="chest_pain">chest_pain</option>

</select>

<label htmlFor="select4">symptoms4:-</label>
<select
name="select4"
id="cars"
className='select_class'
onChange={function_change}>
  <option  value="">--option--</option>
  <option value="itching">itching</option>
<option value="skin_rash">skin_rash</option>
<option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
<option value="continuous_sneezing">continuous_sneezing</option>
<option value="shivering">shivering</option>
<option value="chills">chills</option>
<option value="joint_pain">joint_pain</option>
<option value="stomach_pain">stomach_pain</option>
<option value="acidity">acidity</option>
<option value="ulcers_on_tongue">ulcers_on_tongue</option>
<option value="muscle_wasting">muscle_wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning_micturition">burning_micturition</option>
<option value="spotting_urination">spotting_urination</option>
<option value="fatigue">fatigue</option>
<option value="weight_gain">weight_gain</option>
<option value="anxiety">anxiety</option>
<option value="cold_hands_and_feets">cold_hands_and_feets</option>
<option value="mood_swings">mood_swings</option>
<option value="weight_loss">weight_loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches_in_throat">patches_in_throat</option>
<option value="irregular_sugar_level">irregular_sugar_level</option>
<option value="cough">cough</option>
<option value="high_fever">high_fever</option>
<option value="sunken_eyes">sunken_eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish_skin">yellowish_skin</option>
<option value="dark_urine">dark_urine</option>
<option value="nausea">nausea</option>
<option value="loss_of_appetite">loss_of_appetite</option>
<option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
<option value="back_pain">back_pain</option>
<option value="constipation">constipation</option>
<option value="abdominal_pain">abdominal_pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild_fever">mild_fever</option>
<option value="yellow_urine">yellow_urine</option>
<option value="yellowing_of_eyes">yellowing_of_eyes</option>
<option value="acute_liver_failure">acute_liver_failure</option>
<option value="fluid_overload">fluid_overload</option>
<option value="swelling_of_stomach">swelling_of_stomach</option>
<option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
<option value="malaise">malaise</option>
<option value="blurred_and_distorted_vision">blurred_and_distorted_vision</option>
<option value="phlegm">phlegm</option>
<option value="throat_irritation">throat_irritation</option>
<option value="redness_of_eyes">redness_of_eyes</option>
<option value="sinus_pressure">sinus_pressure</option>
<option value="runny_nose">runny_nose</option>
<option value="congestion">congestion</option>
<option value="chest_pain">chest_pain</option>

</select>

<label htmlFor="select5">symptoms5:-</label>
<select
name="select5"
id="cars"
className='select_class'
onChange={function_change}>
  <option  value="">--option--</option>
  <option value="itching">itching</option>
<option value="skin_rash">skin_rash</option>
<option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
<option value="continuous_sneezing">continuous_sneezing</option>
<option value="shivering">shivering</option>
<option value="chills">chills</option>
<option value="joint_pain">joint_pain</option>
<option value="stomach_pain">stomach_pain</option>
<option value="acidity">acidity</option>
<option value="ulcers_on_tongue">ulcers_on_tongue</option>
<option value="muscle_wasting">muscle_wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning_micturition">burning_micturition</option>
<option value="spotting_urination">spotting_urination</option>
<option value="fatigue">fatigue</option>
<option value="weight_gain">weight_gain</option>
<option value="anxiety">anxiety</option>
<option value="cold_hands_and_feets">cold_hands_and_feets</option>
<option value="mood_swings">mood_swings</option>
<option value="weight_loss">weight_loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches_in_throat">patches_in_throat</option>
<option value="irregular_sugar_level">irregular_sugar_level</option>
<option value="cough">cough</option>
<option value="high_fever">high_fever</option>
<option value="sunken_eyes">sunken_eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish_skin">yellowish_skin</option>
<option value="dark_urine">dark_urine</option>
<option value="nausea">nausea</option>
<option value="loss_of_appetite">loss_of_appetite</option>
<option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
<option value="back_pain">back_pain</option>
<option value="constipation">constipation</option>
<option value="abdominal_pain">abdominal_pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild_fever">mild_fever</option>
<option value="yellow_urine">yellow_urine</option>
<option value="yellowing_of_eyes">yellowing_of_eyes</option>
<option value="acute_liver_failure">acute_liver_failure</option>
<option value="fluid_overload">fluid_overload</option>
<option value="swelling_of_stomach">swelling_of_stomach</option>
<option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
<option value="malaise">malaise</option>
<option value="blurred_and_distorted_vision">blurred_and_distorted_vision</option>
<option value="phlegm">phlegm</option>
<option value="throat_irritation">throat_irritation</option>
<option value="redness_of_eyes">redness_of_eyes</option>
<option value="sinus_pressure">sinus_pressure</option>
<option value="runny_nose">runny_nose</option>
<option value="congestion">congestion</option>
<option value="chest_pain">chest_pain</option>

</select>

<label htmlFor="select6">symptoms6:-</label>
<select
name="select6"
id="cars"
className='select_class'
onChange={function_change}>
  <option  value="">--option--</option>
  <option value="itching">itching</option>
<option value="skin_rash">skin_rash</option>
<option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
<option value="continuous_sneezing">continuous_sneezing</option>
<option value="shivering">shivering</option>
<option value="chills">chills</option>
<option value="joint_pain">joint_pain</option>
<option value="stomach_pain">stomach_pain</option>
<option value="acidity">acidity</option>
<option value="ulcers_on_tongue">ulcers_on_tongue</option>
<option value="muscle_wasting">muscle_wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning_micturition">burning_micturition</option>
<option value="spotting_urination">spotting_urination</option>
<option value="fatigue">fatigue</option>
<option value="weight_gain">weight_gain</option>
<option value="anxiety">anxiety</option>
<option value="cold_hands_and_feets">cold_hands_and_feets</option>
<option value="mood_swings">mood_swings</option>
<option value="weight_loss">weight_loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches_in_throat">patches_in_throat</option>
<option value="irregular_sugar_level">irregular_sugar_level</option>
<option value="cough">cough</option>
<option value="high_fever">high_fever</option>
<option value="sunken_eyes">sunken_eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish_skin">yellowish_skin</option>
<option value="dark_urine">dark_urine</option>
<option value="nausea">nausea</option>
<option value="loss_of_appetite">loss_of_appetite</option>
<option value="pain_behind_the_eyes">pain_behind_the_eyes</option>
<option value="back_pain">back_pain</option>
<option value="constipation">constipation</option>
<option value="abdominal_pain">abdominal_pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild_fever">mild_fever</option>
<option value="yellow_urine">yellow_urine</option>
<option value="yellowing_of_eyes">yellowing_of_eyes</option>
<option value="acute_liver_failure">acute_liver_failure</option>
<option value="fluid_overload">fluid_overload</option>
<option value="swelling_of_stomach">swelling_of_stomach</option>
<option value="swelled_lymph_nodes">swelled_lymph_nodes</option>
<option value="malaise">malaise</option>
<option value="blurred_and_distorted_vision">blurred_and_distorted_vision</option>
<option value="phlegm">phlegm</option>
<option value="throat_irritation">throat_irritation</option>
<option value="redness_of_eyes">redness_of_eyes</option>
<option value="sinus_pressure">sinus_pressure</option>
<option value="runny_nose">runny_nose</option>
<option value="congestion">congestion</option>
<option value="chest_pain">chest_pain</option>

</select>

<button >Submit</button>
</form>
<div className='result'>

</div>
    </div>
  );
}

export default App;
