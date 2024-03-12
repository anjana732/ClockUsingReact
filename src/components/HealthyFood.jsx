function HealthyFood() {
    let healthyFood = ["Chapati","Rice","Ghee","Milk","Green Vegetables","Salad","Sprouts"]
    return (
    <>
      <h1>HealthyFood</h1>
      <ul class="list-group">
        {healthyFood.map((item) => (<li class="list-group-item">{item}</li>))}
      </ul>
    </>
  );
}

export default HealthyFood;
