<template>
  <div class="uiNavAside" ref="sidebar">
    <ul class="nav-aside">
      <SidebarMenu1
        :activeDropdown="activeDropdown"
        :portfolios="portfolios"
        @toggleDropdown="toggleDropdown"
        @goToCreatePortfolio="goToCreatePortfolio"
      />
      <SidebarMenu2
        :activeDropdown="activeDropdown"
        @toggleDropdown="toggleDropdown"
      />
      <SidebarMenu3
        :activeDropdown="activeDropdown"
        @toggleDropdown="toggleDropdown"
      />
    </ul>
  </div>
</template>

<script>
import SidebarMenu1 from './sideBar/SidebarMenu1.vue';
import SidebarMenu2 from './sideBar/SidebarMenu2.vue';
import SidebarMenu3 from './sideBar/SidebarMenu3.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'SideBar',
  components: {
    SidebarMenu1,
    SidebarMenu2,
    SidebarMenu3,
  },
  setup() {
    const portfolios = ref([
      { name: '포트폴리오 1', returns: 10.3, risk: 8.74 },
      { name: '포트폴리오 2', returns: -3.0, risk: 4.0 },
      { name: '포트폴리오 3', returns: 10.3, risk: 8.74 },
    ]);

    const activeDropdown = ref(null);
    const router = useRouter();
    const sidebar = ref(null);

    const toggleDropdown = (menuNumber) => {
      if (activeDropdown.value === menuNumber) {
        activeDropdown.value = null;
      } else {
        activeDropdown.value = menuNumber;
      }
    };

    const goToCreatePortfolio = () => {
      console.log('포트폴리오 구성하기 버튼 클릭됨');
      router.push('/make-portfolio');
    };

    const handleClickOutside = (event) => {
      if (sidebar.value && !sidebar.value.contains(event.target)) {
        activeDropdown.value = null;
      }
    };

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      portfolios,
      activeDropdown,
      toggleDropdown,
      goToCreatePortfolio,
      sidebar,
    };
  },
};
</script>

<style scoped>
.uiNavAside {
  position: fixed;
  right: 0; /* 오른쪽 끝으로 위치 */
  top: 0; /* 페이지 상단에 붙이기 */
  height: 100vh; /* 전체 뷰포트 높이 차지 */
  width: 90px; /* 너비를 150px로 변경 */
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  border-radius: 5px;
  padding: 10px;
}

.nav-aside {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 시작 위치로 정렬 */
  height: 100%; /* 전체 높이 사용 */
}

.nav-aside li {
  text-align: center;
}

.nav-aside a {
  display: flex;
  flex-direction: column; /* 아이콘을 텍스트 위에 배치 */
  align-items: center; /* 아이콘과 텍스트 가운데 정렬 */
  color: white;
  padding: 15px;
  text-decoration: none;
  background-color: #e2dfdf;
  width: 100%;
  height: auto;
  margin-bottom: 5px;
  border-radius: 5px;
}

.nav-aside li:hover a {
  background-color: #575757;
}

.menu-text {
  font-size: 0.9rem;
  margin-top: 5px; /* 아이콘과 텍스트 사이의 간격 */
}
</style>
