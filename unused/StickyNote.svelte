<script lang="ts">
  export let link: string;
  export let title: string;
  export let description: string;
</script>

<div>
  <a
    href={link}
    class="note-wrap"
    style:rotate={`${Math.random() * 10 - 5}deg`}
    style:background-color={`hsl(${Math.random() * 360}, 85%, 78%)`}
  >
    <h1>{title}</h1>
    <p>{description.length <64? description:description.slice(0,61) + '...'}</p>
  </a>
</div>

<style>
  .note-wrap {
    width: 240px;
    min-height: 235px;
    padding: 35px;
    margin: 0 22px 44px 22px;
    position: relative;
    vertical-align: top;
    display: inline-block;
    font-family: Englebert, Arial;
    color: #4b453c;
    background: hsl(51, 85%, 78%);
    line-height: 34px;
    text-align: center;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }
  .note-wrap:before {
    display: block;
    content: '';
    background: rgba(227, 200, 114, 0.4);
    width: 130px;
    height: 28px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    border-radius: 6px/18px 0;
    position: absolute;
    top: -13px;
    left: 50px;
    -webkit-transform: rotate(-2deg);
    -moz-transform: rotate(-2deg);
    -o-transform: rotate(-2deg);
    -ms-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  .note-wrap:hover {
    scale: 1.2;
    z-index: 1;
    transition: all 0.6s ease;
  }
  p {
    margin-top: 0.5rem;
  }
</style>
