import { useState } from "react";

function LoremText() {
    const loremIpsumArray = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed ipsum ultricies, pulvinar eros id, vulputate eros. Nullam vehicula fringilla magna, ac vehicula ante maximus at. Proin vitae nisl id eros fermentum efficitur eget ut libero.",
        "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Curabitur posuere, nulla nec pellentesque volutpat, metus metus placerat eros, nec tristique ex tellus sed lorem. Donec luctus feugiat nibh. Vivamus nec justo risus.",
        "Donec eu libero sit amet quam egestas semper. Cras semper neque eu felis tincidunt, nec aliquam risus rutrum. Aliquam at urna ut ante pretium vehicula at ut eros. Curabitur molestie cursus velit eget ultricies. Sed vitae molestie ipsum.",
        "Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Vestibulum sit amet dui sit amet metus feugiat pulvinar id et velit. Nunc nec enim non turpis consectetur ultricies vitae at risus. Integer vulputate eros at metus rutrum, id lacinia quam malesuada.",
        "Quisque sit amet est et sapien ullamcorper pharetra. In ac mauris at purus vehicula fringilla. Nunc sed lorem id lectus condimentum aliquet ut eu nisi. Nullam et libero eget magna ultricies bibendum. Ut ullamcorper, odio et euismod dapibus, dui lorem placerat sapien, eget fermentum lorem lacus nec ligula.",
        "Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Proin dapibus, velit vitae suscipit suscipit, velit mauris convallis nisl, ac accumsan lorem mauris ut lacus. Nam bibendum tempor orci vitae suscipit.",
        "Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Maecenas ullamcorper libero sed risus tincidunt, in convallis enim scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        "Donec non enim in turpis pulvinar facilisis. Ut felis. Nulla facilisi. Morbi tincidunt, libero nec sollicitudin tincidunt, est diam viverra mi, ut bibendum metus velit non metus. Etiam ac quam vitae sem dignissim aliquet.",
        "Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.",
        "Donec eu libero sit amet quam egestas semper. Cras semper neque eu felis tincidunt, nec aliquam risus rutrum. Aliquam at urna ut ante pretium vehicula at ut eros. Curabitur molestie cursus velit eget ultricies. Sed vitae molestie ipsum.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nobis optio commodi? Dicta voluptatibus obcaecati qui est nam sapiente molestias.",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit modi eum autem, nesciunt soluta hic aliquam molestias vero quo quam aliquid molestiae exercitationem nemo ipsam sunt maxime minus numquam. Deleniti mollitia nisi porro iure neque?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, totam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, fuga numquam! Magni ad maxime voluptas fuga qui ullam, repudiandae suscipit consequatur dolore at similique iusto laboriosam perspiciatis possimus.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iure vel incidunt.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis nisi laboriosam ea veniam voluptates, deleniti corrupti dolor cumque corporis itaque consectetur!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam provident excepturi harum optio consequatur maiores commodi odit impedit est quasi, possimus omnis libero velit quis expedita quos, ab dolores inventore?",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae nobis ipsa necessitatibus itaque, ab voluptates minima modi neque quasi tenetur nostrum, facilis dolorum fugit veritatis magnam eos est esse eaque porro blanditiis! ",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, dolore debitis. Quae autem ut fugit nostrum! Enim temporibus animi nobis tempore?",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus dolorem distinctio culpa, quas nobis reprehenderit aliquid illum dolore asperiores aliquam alias ut et! Corrupti, nesciunt officiis earum explicabo tempore soluta pariatur quae."
    ];

    const [number, setNumber] = useState("");
    const [generatedParagraphs, setGeneratedParagraphs] = useState([]);

    const handleClick = () => {
      if (!number) {
        alert("Please enter the number of paragraphs you want to generate.");
      } else if (number <= 0) {
        alert("Ayyo! You entered a negative number 😵");
      } else {
        if (number > 20) {
          alert("Ayyo! You are demanding too many paragraphs, kindly reduce the number 😀");
          setNumber("20");
        }
    
        setGeneratedParagraphs("");
        const paragraphs = [];
        for (let i = 0; i < number; i++) {
          if (loremIpsumArray[i]) {
            paragraphs.push(
              <div key={i} className="w-[50%] m-auto text-center px-8 py-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#ffd2a9]">
                {(i + 1) + ". "}
                {loremIpsumArray[i]}
              </div>
            );
          }
        }
        setNumber("");
        setGeneratedParagraphs(paragraphs);
      }
    };

return (
    <div className="w-[100%] flex justify-center items-center flex-col gap-10 py-10">
        <h1 className="text-[#94360B] font-bold tracking-wider text-3xl">
            TIRED OF GENERATING LOREM IPSUM?
        </h1>
        <div className="flex gap-2 justify-start items-center py-2 px-6">
            <h1 className="text-xl tracking-wider px-3">Paragraph:</h1>
            <input
              type="number"
              className="py-2 px-2 w-[400px]"
              value={number}
              placeholder="Enter number of paragraphs"
              onChange={(e) => setNumber(e.target.value)}
              onKeyPress={(e) => {
                  if (e.key === "Enter") {
                      handleClick();
                  }
              }}
            />
            <button className="inline-block py-1 px-4 rounded-md bg-[#F5863C] hover:bg-white hover:text-[#7747FF]  text-gray-50 font-bold leading-loose transition duration-200"
            onClick={handleClick}
            >
            GENERATE
            </button>
        </div>
          {generatedParagraphs}
      </div>
  );
}

export default LoremText;
