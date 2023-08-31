import Image from "next/image";
import Wrapper from "@/app/components/shared/Wrapper";
import NikeLogo from "@/app/assets/nike logo.png";

const Header = () => {
  return (
    <div>
      <Wrapper>
        <div>
          <Image src={NikeLogo} alt="Nike Logo" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
