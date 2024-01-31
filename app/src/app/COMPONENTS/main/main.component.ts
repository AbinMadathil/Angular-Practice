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
        name: "Money Making Skills by Warren Buffet: Money Making Skills by Warren Buffet: A Guide to Building Wealth (Warren Buffett Investment Strategy Book)",
        author: "Holly Jackson",
        img: "https://m.media-amazon.com/images/I/61nPOooFaML._SY466_.jpg",
        ogPrice: 500,
        discountPrice: 200,
        desc:"Money Making Skills by Warren Buffet. Discover the keys to financial success as Jacob unravels the wisdom of one of the greatest investors of our time, Warren Buffet."
      },
      {
        id: 2,
        name: "Life is Short And So Is This Book: Brief Thoughts On Making The Most Of Your Life ",
        author: "Abin Madathil",
        img: "https://m.media-amazon.com/images/I/51jY05exaYL._SY466_.jpg",
        ogPrice: 600,
        discountPrice: 200,
        desc:"Life is short. You can, if you work hard and are lucky, get more of almost anything, but you can’t get more time. Time only goes one way. The average American has a lifespan of less than 30,000 days. So how you choose to live matters."
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
