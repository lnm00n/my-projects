
<template>
    <div class="hobbies-container">
        <section id="hobbies" class="hobbies-frame-section">
            <h2>Latest Hobbies</h2>
            <div class="hobbies-row">
                <router-link to="/piano" class="hobby-frame">Piano</router-link>
                <router-link to="/golf" class="hobby-frame">Golf</router-link>
                <router-link to="/travel" class="hobby-frame">Travel</router-link>
            </div>
            <div class="hobbies-row">
                <router-link to="/animals" class="hobby-frame">Animals</router-link>
                <router-link to="/snacking" class="hobby-frame">Snacking</router-link>
                <router-link to="/running" class="hobby-frame">Running</router-link>
            </div>
        </section>
    </div>
</template>
  
<script>
export default {
name: "Dev",
data() {
    return {
    downloaded: false,
    resumeUrl: new URL('../assets/MooneyResume_Philly.pdf', import.meta.url).href
    }
},
methods: {
    handleDownload() {
    this.downloaded = true;

    setTimeout(() => {
        this.downloaded = false;
    }, 2000);
    }
}
}
</script>
  
<style lang="scss" scoped>
@use '../styles/colors' as *;
.hobbies-frame-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  background-image: url('../assets/toile.png');
  background-repeat: repeat; // tiles the image
  background-size: auto;
  background-position: 0 0;
}

.hobbies-frame-section h2 {
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
}

.hobbies-row {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  width: 100%;
}

.hobby-frame {
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex: 1 1 0;
  max-width: 200px;
  height: 150px;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

.hobby-frame:hover {
  transform: scale(1.05);
  background-color: rgba(255, 255, 255, 1);
}

</style>