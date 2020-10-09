<template>
    <div>
        <h1>Job Hunting Progress Manage</h1>
        <p>就職・転職活動における、選考状況や応募状況の管理にご利用下さい。</p>
        <div class='pic'>
            <img src='./jiko_appeal_woman.png' class='appeal'>
            <img src='./gutspose.png' class='guts'>
            <img src='./syourai_sekkei_man.png' class='syourai'>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
}
</script>

<style>
h1 {
    margin-top: 10px;
    font-size: 50px;
}
.pic {
    display: flex;
}

.appeal {
    width: 350px; 
    height: 270px;
    margin-top: 150px;
    margin-left: 15px;
}

.guts {
    width: 500px;
    height: auto;
}

.syourai {
    width: 350px; 
    height: 270px;
    margin-top: 150px;
}

@media(max-width: 767px) {
  h1 {
    font-size: 30px;
  }

  .appeal {
    display: none;
  }

  .guts {
      margin-left: auto;
      margin-right: auto;
  }

  .syourai {
      display: none;
  }
}

@media(max-width: 653px) {
  h1 {
    font-size: 30px;
  }

  .guts {
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    height: auto;
  }
}
</style>