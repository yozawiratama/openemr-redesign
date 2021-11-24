import { format } from 'date-fns';

export function validateInput(object: any, key: string, param: string) {
    if (object && object[key]) {
        const err = object[key].errors.includes(param);
        return err;
    } else {
        return false;
    }
}

export function validateErrorField(object: any, key: string) {
    if (object && object[key]) {
        if (object[key].errors.length > 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export function cleanHtmlTags(str: string) {
    if (!str) return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, '');
}

export function formatDate(object: any) {
    //   var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    //   var bulan = [
    //     "Januari",
    //     "Februari",
    //     "Maret",
    //     "April",
    //     "Mei",
    //     "Juni",
    //     "Juli",
    //     "Agustus",
    //     "September",
    //     "Oktober",
    //     "November",
    //     "Desember",
    //   ];

    //   var tanggal = new Date().getDate();
    //   var xhari = object.getDay();
    //   var xbulan = object.getMonth();
    //   var xtahun = object.getYear();

    //   var tahun = xtahun < 1000 ? xtahun + 1900 : xtahun;

    return format(new Date(), 'eeee, dd MM yyyy');
}

export function formatRupiah(angka: number, prefix: string) {
    var number_string = angka ? angka.toString() : '0',
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
        var separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;

    if (!rupiah) {
        rupiah = '';
    }
    if (!prefix) {
        prefix = '';
    }
    return prefix + rupiah;
}

export function formatNumber(angka) {
    if (!Number.isInteger(angka)) {
        return parseInt(angka.replace(/[^,\d]/g, ''));
    }
    return angka;
}

export function slugCompare(text1: string, text2: string){
    if(!text1 || !text2){
        return false;
    }
    return (text1.replace(/\s/g, "").toLowerCase() === text2.replace(/\s/g, "").toLowerCase());
}

export function phone(phone:number) {
    if (phone) return `+62 ${phone}`;
    else return 'No Phone';
}

export function gender(gender:string) {
    if (gender == 'M') return 'Male';
    else if (gender == 'F') return 'Female';
    else return 'Other';
}