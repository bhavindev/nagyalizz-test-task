<template>
  <div class="bg-[#eaf4ff]">
    <div
      class="p-4 h-[100vh] flex justify-center flex-col gap-6 items-center overflow-y-auto"
    >
      <div
        class="rounded-lg flex items-center justify-center max-w-[1120px] sm:px-[20px] bg-img w-full"
      >
        <div
          v-if="showSuccessModal"
          class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75"
        >
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-4">Logged in Successfully!</h2>
            <button
              @click="closeSuccessModal"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Ok
            </button>
          </div>
        </div>
        <div class="w-[50%] md:block hidden">
          <img src="../assets/illustration.svg" alt="" class="m-auto mr-0" />
        </div>
        <div class="md:w-[50%] w-full md:max-w-[100%] max-w-[500px]">
          <div
            class="w-full bg-white rounded-lg py-4 sm:px-8 px-4 lg:ml-[20px] shadow-[rgba(100,_100,_111,_0.2)_0px_5px_30px_0px]"
          >
            <h1
              class="sm:text-[28px] text-[22px] font-bold mt-[20px] sm:mb-[5px] mb-[30px] text-[#1890da]"
            >
              Sign in to your Accounts
            </h1>
            <div
              v-if="credentialError"
              class="text-red-600 block text-[20px] text-center"
            >
              {{ credentialError }}
            </div>

            <div class="mt-4">
              <div class="w-full">
                <label
                  class="block text-gray-700 font-bold mb-1 text-start text-[14px]"
                  for="field2"
                >
                  Username
                </label>
                <input
                  class="border border-gray-400 rounded-lg py-2 px-4 mb-1 outline-[#264dd9] focus:shadow-outline w-full"
                  type="text"
                  id="field1"
                  placeholder="Enter Username"
                  v-model="username"
                />
                <div
                  v-if="usernameError"
                  class="text-red-600 block text-[14px] text-left"
                >
                  {{ usernameError }}
                </div>
              </div>
              <div class="w-full mt-[10px]">
                <label
                  class="block text-gray-700 font-bold mb-1 text-start text-[14px]"
                  for="field2"
                >
                  Password
                </label>
                <input
                  class="border border-gray-400 rounded-lg py-2 px-4 mb-1 outline-[#264dd9] focus:shadow-outline w-full"
                  type="password"
                  id="field1"
                  placeholder="Enter Password"
                  v-model="password"
                />
                <div
                  v-if="passwordError"
                  class="text-red-600 block text-[14px] text-left"
                >
                  {{ passwordError }}
                </div>
              </div>
              <button
                class="bg-[#1890da] hover:bg-blue-500 text-white font-bold py-2 px-8 mb-[20px] rounded focus:outline-none focus:shadow-outline mt-[40px]"
                @click="login"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
    <script>
import { reactive, ref } from "vue";
// import { useRouter } from "vue-router";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const data = reactive({});

    const username = ref("");
    const usernameError = ref("");

    const password = ref("");
    const passwordError = ref("");

    const credentialError = ref("");

    const showSuccessModal = ref(false);

    const router = useRouter();
    // const router = useRouter();
    // const route = useRouter();

    const closeSuccessModal = () => {
      showSuccessModal.value = false;
    };

    const login = async () => {
      const baseURL = "http://localhost:3000/user?";

      if (username.value == "" || username.value == null) {
        usernameError.value = "Enter Username";
        return false;
      } else {
        usernameError.value = "";
      }
      if (password.value == "" || password.value == null) {
        passwordError.value = "Enter Password";
        return false;
      } else {
        passwordError.value = "";
      }

      try {
        const res = await axios.get(
          baseURL + "username=" + username.value + "&password=" + password.value
        );
        if (res.data == null || res.data == "") {
          credentialError.value = "Invalid credentials";
        } else {
          localStorage.setItem('isLogin',true);
          localStorage.setItem('name',res.data[0].username);

          await  router.push("/dashboard");
          // showSuccessModal.value = true;

          // window.location.href = "/dashboard";
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
    return {
      data,
      login,
      username,
      usernameError,
      password,
      passwordError,
      // route,
      showSuccessModal,
      closeSuccessModal,
      router,
      credentialError,
    };
  },
};
</script>
  
    <style></style>
  