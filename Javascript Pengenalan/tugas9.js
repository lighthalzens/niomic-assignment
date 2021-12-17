function nine() {
    var mobil = {
        merk: "brio",
        tahun: 2015,
        service_record: {
            km10000: true,
            km20000: true,
            km30000: true,
            km40000: false,
        }
    }
    for (var y in mobil) {
        console.log(mobil[y]);
    }
}
nine();