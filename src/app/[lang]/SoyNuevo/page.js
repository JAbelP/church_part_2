import EntirePage from "@/app/[lang]/_components/newMemberComponent/newMemberEntirePage";

// export const metadata = {
//   title: "Soy Nuevo",
//   description: "Únase a nuestra Iglesia",
// };

export async function generateMetadata({ params: { lang } }) {
  return {
    title: "NewMemberTitle",
    description: "NewMemberDescription",
  };
}

export default function Home() {
  return (
    <>
      <EntirePage
        aboutYouHeader={"About You"}
        nameText={"Name"}
        ageText={"Age"}
        genderText={"Gender"}
        Male={"Male"}
        Female={"Female"}
        phoneText={"Phone"}
        emailText={"Email"}
        Evangalism={"Evangalism"}
        Facebook={"Facebook"}
        Convert={"Convert"}
        selectGender={"Select Gender"}
        contactInformation={"Contact Information"}
        additionalInformation={"Additional Information"}
        howDidYouHear={"How Did You Hear"}
        selectAnOption={"Select An Option"}
        iWouldLikeTo={"I Would Like To"}
        joinTheChurch={"Join The Church"}
        talkToSomeone={"Talk To Someone"}
        doYouHaveaPetition={"Do You Have a Petition?"}
        friend={"Friend"}
        submitText={"Submit"}
        bibleVerse={"Bible Verse"}
        bibleVerseCite={"Bible Verse Cite"}
        header1={"Who Are We"}
        header2={"Leadership"}
        header3={"Ministries"}
        header4={"Events"}
        header5={"Sermons"}
        header6={"Offerings"}
      />
    </>
  );
}
