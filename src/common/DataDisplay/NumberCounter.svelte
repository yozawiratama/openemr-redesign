<script>
    import {formatRupiah} from "../../helpers/FormHelper"
    export let number;
    export let type = "number";
    let prevNumber = 0;
    let ref;
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            obj.innerHTML = type === "money" ? formatRupiah(value, "Rp ") : value;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
        return end;
    }

    $: if(ref){
        prevNumber = animateValue(ref, prevNumber, number, 750);
    }
</script>

<span bind:this={ref}>{number}</span>