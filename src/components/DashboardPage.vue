<script setup>

import { useRouter } from "vue-router";
import '../css/index.css'
const router = useRouter();

const name = localStorage.getItem('name');

function handleLogout() {
  localStorage.removeItem("isLogin");
  localStorage.removeItem("name");
  router.push('/');
}
</script>

<template>
  <div class="sidebar active">
    <div class="logo_content">
      <div class="logo">
        <i class="bx bxl-c-plus-plus" style="font-size: 30px"></i>
        <div class="logoname" style="margin-left: 5px">Brand Name</div>
      </div>
      <i class="bx bx-menu-alt-right" id="btn" style="font-size: 25px"></i>
    </div>
    <ul class="nav_list">
      <li>
        <i class="bx bx-search"></i>
        <input type="text" placeholder="Search..." />
        <span class="tooltip">Search</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-grid-alt"></i>
          <span class="link_names">Dashboard</span>
        </a>
        <span class="tooltip">Dashboard</span>
      </li>
     
      <li>
        <a href="#">
          <i class="bx bx-heart"></i>
          <span class="link_names" @click="handleLogout">Logout</span>
        </a>
        <span class="tooltip">Logout</span>
      </li>
    </ul>
    <div class="profile_content">
      <div class="profile">
        <div class="profile_details">
          <img
            src="https://vz.cnwimg.com/wp-content/uploads/2014/01/alex.jpg?x86007"
            alt=""
          />
          <div class="name_job">
            <div class="name">{{ name }}</div>
          </div>
        </div>
        <i class="bx bx-log-out" id="log_out"></i>
      </div>
    </div>
  </div>
  <div class="home_content">
    <div class="text">Welcome To Dashboard</div>
  </div>
</template>

