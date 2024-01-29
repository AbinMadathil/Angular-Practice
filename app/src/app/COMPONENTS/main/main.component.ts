import { Component, OnInit} from '@angular/core';
import { AppService } from '../../SERVICES/app.service';
import { CommonModule } from '@angular/common';

interface bookDetails{
  id:number,
  name:string,
  author:string,
  img:string,
  ogPrice:number,
  discountPrice:number,
  desc:string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  bookArray: Array<bookDetails> =[];
  bookDetails: string = "";
  ngOnInit(): void {
    this.bookArray = [
      {
        id: 1,
        name: "The Good Girl's Guide to Murder: Book 1 (A Good Girl’s Guide to Murder) (A Good Girl’s Guide to Murder)",
        author: "Holly Jackson",
        img: "https://m.media-amazon.com/images/I/81E3hDPr3eL._AC_UY327_FMwebp_QL65_.jpg",
        ogPrice: 499,
        discountPrice: 263,
        desc:"A debut YA crime thriller as addictive as Serial and as page-turning as One of Us Is Lying. A cold-case thriller written in the original format of a college report - complete with interviews, logs and murder maps. A deftly-woven cold-case plot with themes of race, privilege, family and justice at its heart. An incredibly commercial, thrilling and darkly humorous debut voice in YA crime fiction from a young author who is One To Watch. The case is closed. Five years ago, schoolgirl Andie Bell was murdered by Sal Singh. The police know he did it. Everyone in town knows he did it. Almost everyone. Having grown up in the small town that was consumed by the crime, Pippa Fitz-Amobi chooses the case as the topic for her final project. But when Pip starts uncovering secrets that someone in town desperately wants to stay hidden, what starts out as a project begins to become Pip?s dangerous reality . . . Perfect for fans of One of Us Is Lying, We Were Liars, Gone Girl, Pretty Little Liars and Riverdale."
      },
      {
        id: 2,
        name: "The Good Girl's Guide to Murder: Book 1 (A Good Girl’s Guide to Murder) (A Good Girl’s Guide to Murder)",
        author: "Holly Jackson",
        img: "https://m.media-amazon.com/images/I/81E3hDPr3eL._AC_UY327_FMwebp_QL65_.jpg",
        ogPrice: 499,
        discountPrice: 263,
        desc:"A debut YA crime thriller as addictive as Serial and as page-turning as One of Us Is Lying. A cold-case thriller written in the original format of a college report - complete with interviews, logs and murder maps. A deftly-woven cold-case plot with themes of race, privilege, family and justice at its heart. An incredibly commercial, thrilling and darkly humorous debut voice in YA crime fiction from a young author who is One To Watch. The case is closed. Five years ago, schoolgirl Andie Bell was murdered by Sal Singh. The police know he did it. Everyone in town knows he did it. Almost everyone. Having grown up in the small town that was consumed by the crime, Pippa Fitz-Amobi chooses the case as the topic for her final project. But when Pip starts uncovering secrets that someone in town desperately wants to stay hidden, what starts out as a project begins to become Pip?s dangerous reality . . . Perfect for fans of One of Us Is Lying, We Were Liars, Gone Girl, Pretty Little Liars and Riverdale."
      },
      {
        id: 3,
        name: "The Good Girl's Guide to Murder: Book 1 (A Good Girl’s Guide to Murder) (A Good Girl’s Guide to Murder)",
        author: "Holly Jackson",
        img: "https://m.media-amazon.com/images/I/81E3hDPr3eL._AC_UY327_FMwebp_QL65_.jpg",
        ogPrice: 499,
        discountPrice: 263,
        desc:"A debut YA crime thriller as addictive as Serial and as page-turning as One of Us Is Lying. A cold-case thriller written in the original format of a college report - complete with interviews, logs and murder maps. A deftly-woven cold-case plot with themes of race, privilege, family and justice at its heart. An incredibly commercial, thrilling and darkly humorous debut voice in YA crime fiction from a young author who is One To Watch. The case is closed. Five years ago, schoolgirl Andie Bell was murdered by Sal Singh. The police know he did it. Everyone in town knows he did it. Almost everyone. Having grown up in the small town that was consumed by the crime, Pippa Fitz-Amobi chooses the case as the topic for her final project. But when Pip starts uncovering secrets that someone in town desperately wants to stay hidden, what starts out as a project begins to become Pip?s dangerous reality . . . Perfect for fans of One of Us Is Lying, We Were Liars, Gone Girl, Pretty Little Liars and Riverdale."
      }
    ]
  }
  constructor(private appService: AppService){}

  public getBookDetails(index:number):void{
    if(this.bookDetails){
      this.bookDetails="";
    }
    else{
      this.bookDetails = this.bookArray[index].desc;
    }
  }
}
