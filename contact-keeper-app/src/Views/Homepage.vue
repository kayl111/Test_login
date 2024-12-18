<template>
  <div>

        <h1 style="font-size:80px;  ">Welcome to Latte Lab</h1>
       <h2 style="font-size: 20px;">Brew coffee to your likeness</h2>  

           <div class="thisisme-cont">
      <div class="content-cont">
        Explore recipes, brewing techniques, and tools that let you craft the perfect cup of coffee right at home.<br>
        From classic espresso to innovative cold brews, we help you master your favorite drinks.
      </div>
    </div>



       <div class="images">
          <div> <img src="https://cdn.shopify.com/s/files/1/0137/1655/3786/files/caffe_americano.jpg?v=1614873502" class="image"></div>
          <div> <img src="https://i.pinimg.com/736x/0c/93/b3/0c93b3065fa962cb2a98e1a0afbf447b.jpg" class="image"></div>
          <div> <img src="https://i.pinimg.com/736x/d1/34/4e/d1344ee0f1b1624c70c9772cdaf8b5f4.jpg" class="image"></div>
      </div>
      
      <div class="button">
        <div >  <button   class="a-button"          >Hot Coffee</button> </div>
          <div>  <button   class="a-button"   >Iced Coffee</button > </div>
            <div ><button    class="a-button"  >Milk Tea Coffee</button> </div>
      </div>



  </div>
</template>


<script>
export default {
  name: 'TheLogin',
  props: {
    msg: String
  }
}
</script>


<style scoped>

 h1, h2
{ display: flex;
  flex-direction: column;
  justify-content: center;
   align-self: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: #442900;
  animation: fadeInUp 2.5s ease-out forwards;

}



.thisismecont {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          max-width: 80%;
          box-sizing: border-box;
        }
        
        .content-cont{
          padding-top: 40px;
          text-align: center;
          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
          font-size: 1.4rem;
          font-weight: bold;
          color: #442900;
          animation: fadeInUp 2.5s ease-out forwards; 
        }

 .image
{
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
  height: 550px;
  width: 550px;
  box-shadow: 20px 20px 20px #00000029;
  animation: fadeInUp 2.5s ease-out forwards; 
}
.images
{
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-right: auto;
    margin-bottom: 0px;
    column-gap: 45px;
    row-gap: 25px;
    justify-content: center;
    padding-top: 20px;
}
.button
{
  display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-right: auto;
    margin-bottom: 0px;
    column-gap:345px;
    justify-content: center;
    padding-top: 20px;
  animation: fadeInUp 2.5s ease-out forwards; 
}

.a-button
{
  height:55px;
  width: 250px;
  background: transparent linear-gradient(90deg, #1a1401 0%, #241b01 100%) 0% 0% no-repeat padding-box;
  color: white;
  border: 1px;
  text-align: center;
   font-size: 20px;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   letter-spacing: 1px;
   max-width: 100%;
   border-radius: 70px;
  border-width: 1px;
   border-style: solid;
}



@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }
  .image img {
    max-width: 100%; 
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(50px); 
  }
  100% {
    opacity: 1;
    transform: translateY(0); 
  }
}
</style>


