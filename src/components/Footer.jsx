import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="mt-10 border-t-[3px] border-border bg-canvas px-4 pb-12 pt-10 md:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8">
        <SocialLinks centered />
        <p className="text-center text-[1.2rem] font-semibold text-ink md:text-[1.45rem]">
          Made with <span className="text-[#ef3d2f]">♥</span> by myself!
        </p>
      </div>
    </footer>
  );
}
