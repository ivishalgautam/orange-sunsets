import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <main className="flex items-center flex-col justify-center h-full px-20">
        <Image src={"/logo.jpeg"} width={500} height={500} alt="logo" />
        <p className="text-center">
          <strong>Our Website is Getting a Makeover! </strong>Pardon Our Dust,
          Big Things Are Coming. We’re revamping our website to bring you an
          even sunnier experience at Orange Sunsets. Soon, you’ll be able to
          explore our vacation rentals in a whole new way! In the meantime,
          we’re still here to help! Reach out to us at &nbsp;
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@orangesunsets.in&su=&body=&bcc=sales@orangesunsets.in"
            className="hover:text-blue-500"
          >
            sales@orangesunsets.in
          </a>
          &nbsp; for bookings or any questions. Stay tuned, and thank you for
          your patience as we get ready to unveil something amazing! Team Orange
          Sunsets
        </p>
      </main>
    </div>
  );
}
