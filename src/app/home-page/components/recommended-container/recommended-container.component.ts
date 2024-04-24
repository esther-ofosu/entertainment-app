import { Component } from '@angular/core';
import { MovieCardComponent } from "../../../shared/components/movie-card/movie-card.component";
import { dataFile,bookmarkData } from '../../../../data';


@Component({
    selector: 'app-recommended-container',
    standalone: true,
    templateUrl: './recommended-container.component.html',
    styleUrl: './recommended-container.component.css',
    imports: [MovieCardComponent]
})
export class RecommendedContainerComponent {
    Data = dataFile;
    Bookmark=bookmarkData;
}
