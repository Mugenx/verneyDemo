<?php include('header.php') ?>

<div class="container" style="width: 900px; padding: 0 0 50px;  margin: 50px auto; box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);" align="center">
    <!-- <img src="img/about.jpg" style="width: 100%;"> -->

<div id="map" style="width:100%;height:300px"></div>
  <script>
    function initMap() {
      var uluru = {lat: 45.351881, lng: -75.788592};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
  </script>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZukZhiHna2oD9IlBqP0MDD5vCUJkVRqY&callback=initMap"
  type="text/javascript"></script>
    
    <div style="margin-top: 30px">
        <p>
      If you have any questions or concerns, please contact us:<br><br>
    </p>
    <table>
      <tr>
        <td>Website:</td>
        <td><a href="www.verney.ca">www.verney.ca</a></td>
      </tr>
      <tr>
        <td>Telephone:</td>
        <td>613.226.8317</td>
      </tr>
      <tr>
        <td>Fax:</td>
        <td>613.722.7725</td>
      </tr>
      <tr>
        <td>Email:</td>
        <td><a href="mailto:info@verney.ca">info@verney.ca</a></td>
      </tr>
    </table>
    <p>
      <br>2720 Queensview Dr.<br>
      Ottawa, ON, Canada K2B 8C5
    </p>
    </div>
</div>

<div class="rTop" id="rTop" onClick="toTop()"><span class="glyphicon glyphicon-chevron-up" style="font-size: 20px; padding: 10px 0; 
    " ></span></div>


    <?php include('footer.php') ?>