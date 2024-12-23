import Button from "../../../../components/button";

export default function Premium() {
  return (
    <section className="mb-[15px] border border-[#2f3336] rounded-2xl flex flex-col items-start gap-[10px] py-[11px] px-[15px] text-[#e7e9ea]">
      <h6 className="text-[19px] leading-[23px] font-extrabold">
        Premium&apos;a Abone Ol
      </h6>
      <p className="leading-[19px] text-[14px] font-normal">
        Yeni özellikleri açmak için abone ol ve uygun olman durumunda içerik
        üreticisi gelir payı kazan.
      </p>
      <Button>Abone ol</Button>
    </section>
  );
}
