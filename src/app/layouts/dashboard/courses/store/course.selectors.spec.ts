import * as fromCourse from './course.reducer';
import { selectCourseState } from './course.selectors';

xdescribe('Course Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCourseState({
      [fromCourse.courseFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
